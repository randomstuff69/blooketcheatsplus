(async ()=>{
    let run = 0;
    let lastSend = Date.now();
    let lastMouseSend = Date.now();
    
    window.options = { renderBlockedLines:!0, autoAim: { scaleFactor: 2.5, predictMovement: false }, renderPlayers: !0, renderTargets: !0, renderPowerups: !0, scrollZoom: !0, scrollSensitivity: 70, freeCamSensitivity: 12, spectatingPlayer: null, autoShoot: !1, autoAnswer: !0 };
    let scene = Object.values(document.querySelector("#phaser-laserGame"))[0].return.updateQueue.lastEffect.deps[1].current.game.scene.scenes[1];
    let localPlayer = scene.localPlayer;
    const csurl = [...document.querySelectorAll("link")].filter(e => e.href.includes("colyseus-"))[0].href;
    const colyseus = await import(csurl);
    let sendfunc = colyseus.a().Room.prototype.send;
    window.room = undefined;
    colyseus.a().Room.prototype.send = function (a) { window.room = this; if (run < 1) { runCheat(); } if(options.autoShoot && a == "playerMouseUpdate"){return;} if (options.freeCam) { if (a == "playerMoveInput") { return; } } return sendfunc.apply(this, arguments); };
    function runCheat() {
      addPowerupListener();
      addAutoAnswerListeners();
      //getPlayers().forEach(e => { addColyseusPosListener(e); });
      //addColyseusPosListener(localPlayer);
      room.onMessage("playerPosUpdate", () => {
        if (options.autoShoot) {
          let localp = [null, localPlayer.player];
          let playerAngle = 0;
          let players = Array.from(room.state.players)
            .filter(e => e[1].sessionId && e[1] !== localp[1] && !e[1].invulnerable && !lineIsBlocked({x1:localp[1].x, y1:localp[1].y, x2:e[1].x, y2:e[1].y}));
          if (players.length < 1) {
            let targets = Array.from(room.state.targets)
              .filter(e => !e[1].isHit && !lineIsBlocked({x1:localp[1].x, y1:localp[1].y, x2:e[1].x, y2:e[1].y}))
            if (targets.length < 1) { return; }
            playerAngle = angle(getLowestDistance(targets, localp), localp);
          } else {
            let lowestPlayer = room.state.players.get(getLowestDistance(players, localp)[1].name);
            if (options.autoAim.predictMovement) {
              let targetPos = { x: lowestPlayer.x, y: lowestPlayer.y };
              targetPos = { x: lowestPlayer.x + (lowestPlayer.velocity.x * options.autoAim.scaleFactor), y: lowestPlayer.y + (lowestPlayer.velocity.y * options.autoAim.scaleFactor) };
              playerAngle = angle([null, targetPos], localp);
            } else {
              playerAngle = angle(getLowestDistance(players, localp), localp);
            }
          }
          sendfunc.apply(room,["playerMouseUpdate", { mouseAngle: playerAngle }]); lastMouseSend = Date.now();
          if (Date.now() - lastSend > 50) { room.send("playerMouseUpdate", { mouseAngle: playerAngle }); room.send("playerMouseClick", null); lastSend = Date.now(); }
        }
      }); run = 1;
    }
    function angle(player1, player2) {
      return Math.atan2(player1[1].y - player2[1].y, player1[1].x - player2[1].x);
    }
    function distance(player1, player2) {
      return Math.hypot(player1[1].x - player2[1].x, player1[1].y - player2[1].y);//pythagorean theorem goes crazy
    }
    function getLowestDistance(arr, localp) {
      let lowestDistance = arr[0];
      let lowestIndex = 0;
      for (let i = 0; i < arr.length; i++) {
        let dist = distance(arr[i], localp);
        if (dist < lowestDistance) {
          lowestIndex = i;
          lowestDistance = dist;
        }
      }
      return arr[lowestIndex];
    }
    
    function getPlayers() {
      return [...scene.players].map(e => e[1]).filter(e => e.player.sessionId);
    }
    function getTargets() {
      return [...scene.targets].map(e => e[1]);
    }
    let playerLines = [];
    let targetLines = [];
    let playerRects = [];
    let targetRects = [];
    let powerupLines = [];
    let powerupRects = [];
    
    //keybinds -------------
    document.addEventListener("keydown", e => {
      switch (e.key) {
        case "f":
          toggleFreeCam();
          break;
        case "g":
          options.autoShoot = !options.autoShoot;
          break;
        case "1":
          options.renderPlayers = !options.renderPlayers;
          updatePlayerLines();
          break;
        case "2":
          options.renderTargets = !options.renderTargets;
          updateTargetLines();
          break;
        case "3":
          options.renderPowerups = !options.renderPowerups;
          updatePowerupLines();
          break;
        case "4":
            options.renderBlockedLines = !options.renderBlockedLines;
            updatePlayerLines();
            updateTargetLines();
            updatePowerupLines();
        break;
      }
    });
    //keybinds -------------
    //player ---------------
    function drawPlayerRect(target) {
      let gfx = scene.add.graphics();
      gfx.lineStyle(2, 0x00ff00);
      gfx.strokeRect(-40, -40, 80, 84);
      playerRects.push(gfx);
      target.container.add(gfx);
    }
    function drawPlayerLine(player) {
      let gfx = scene.add.graphics();
      let line = new Phaser.Geom.Line(localPlayer.container.x, localPlayer.container.y, player.container.x, player.container.y);
      const isBlocked = options.renderBlockedLines ? lineIsBlocked(line) : false;
      gfx.lineStyle(2, isBlocked ? 0x006600 : 0x00ff00);
      gfx.setDepth(99999);
      if (options.renderPlayers) { gfx.strokeLineShape(line); }
      playerLines.push([player, gfx, line]);
    }
    function updatePlayerLines() {
      playerRects.forEach(e => e.visible = options.renderPlayers);
      playerLines.forEach(e => {
        let gfx = e[1];
        let line = e[2];
        line.setTo(localPlayer.container.x, localPlayer.container.y, e[0].container.x, e[0].container.y);
        gfx.clear();
        if (options.renderPlayers) {
          const isBlocked = options.renderBlockedLines ? lineIsBlocked(line) : false;
          gfx.lineStyle(2, isBlocked ? 0x006600 : 0x00ff00);
          gfx.strokeLineShape(line);
        }
      });
    }
    //player ---------------
    
    //autoanswer -----------
    let storedQuestions = new Map();
    let currentQuestion = {};
    function addAutoAnswerListeners() {
      room.onMessage("showQuestion", g => {
        if (!g) { return; }
        currentQuestion = g;
        let ans = storedQuestions.get(g.number);
        if (ans && options.autoAnswer) { room.send("playerAnswerQuestion", { answer: ans[0] }); }
      });
      room.onMessage("answerResult", g => {
        if (g.correctAnswers) {
          storedQuestions.set(currentQuestion.number, g.correctAnswers);
        }
        room.send("playerAnswerNext", null);
        localPlayer.respawning = false;
      });
    }
    window.exportAnswers = () => {
      return btoa(JSON.stringify([...storedQuestions]));
    }
    window.importAnswers = (answerString) => {
      try {
        storedQuestions.clear();
        JSON.parse(atob(answerString)).forEach(e => storedQuestions.set(e[0], e[1]));
      } catch (e) { }
    }
    //autoanswer -----------
    
    //target ---------------
    
    function drawTargetRect(target) {
      let gfx = scene.add.graphics();
      gfx.lineStyle(2, 0xff0000);
      gfx.strokeRect(-40, -40, 80, 84);
      targetRects.push(gfx);
      target.container.add(gfx);
    }
    function drawTargetLine(target) {
      let gfx = scene.add.graphics();
      let line = new Phaser.Geom.Line(localPlayer.container.x, localPlayer.container.y, target.container.x, target.container.y);
      const isBlocked = options.renderBlockedLines ? lineIsBlocked(line) : false;
      gfx.lineStyle(2, isBlocked ? 0x660000 : 0xff0000);
      gfx.setDepth(99999);
      if (options.renderTargets) { gfx.strokeLineShape(line); }
      targetLines.push([target, gfx, line]);
    }
    function updateTargetLines() {
      targetRects.forEach(e => e.visible = options.renderTargets);
      targetLines.forEach(e => {
        let gfx = e[1];
        let line = e[2];
        line.setTo(localPlayer.container.x, localPlayer.container.y, e[0].container.x, e[0].container.y);
        gfx.clear();
        if (options.renderTargets) {
          const isBlocked = options.renderBlockedLines ? lineIsBlocked(line) : false;
          gfx.lineStyle(2, isBlocked ? 0x660000 : 0xff0000);
          gfx.strokeLineShape(line);
        }
      });
    }
    
    //target ---------------
    
    //powerup --------------
    
    function drawPowerupRect(powerup) {
      let gfx = scene.add.graphics();
      let sprite = powerup.powerupSprite;
      gfx.lineStyle(2, 0x0000ff);
      gfx.strokeRect(sprite.x - (sprite.width / 2), sprite.y - (sprite.height / 2), sprite.width, sprite.height);
      powerupRects.push(gfx);
    }
    function drawPowerupLine(powerup) {
      let gfx = scene.add.graphics();
      let line = new Phaser.Geom.Line(localPlayer.container.x, localPlayer.container.y, powerup.powerupSprite.x, powerup.powerupSprite.y);
      const isBlocked = options.renderBlockedLines ? lineIsBlocked(line) : false;
      gfx.lineStyle(2, isBlocked ? 0x000066 : 0x0000ff);
      gfx.setDepth(99999);
      if (options.renderPowerups) { gfx.strokeLineShape(line); }
      powerupLines.push([powerup, gfx, line]);
    }
    function updatePowerupLines() {
      powerupRects.forEach(e => e.visible = options.renderPowerups);
      powerupLines.forEach(e => {
        let gfx = e[1];
        let line = e[2];
        line.setTo(localPlayer.container.x, localPlayer.container.y, e[0].powerupSprite.x, e[0].powerupSprite.y);
        gfx.clear();
        if (options.renderPowerups) {
          const isBlocked = options.renderBlockedLines ? lineIsBlocked(line) : false;
          gfx.lineStyle(2, isBlocked ? 0x000066 : 0x0000ff);
          gfx.strokeLineShape(line);
        }
      });
    }
    function getPowerups() {
      return [...scene.mapCells].map(e => e[1]).filter(e => e.powerupSprite).filter(e => e.cell.powerup);
    }
    function addPowerupListener() {
      room.state.map.cells.forEach(e => e.listen("powerup", (() => {
        powerupRects.forEach(e => e.visible = !1);
        powerupLines.forEach(e => e[1].clear());
        powerupLines = []; powerupRects = [];
        getPowerups().forEach(e => { drawPowerupRect(e); drawPowerupLine(e); });
      })));
    }
    //TODO: fix powerup rects not dissappearing
    //powerup --------------
    
    //scroll ---------------
    function listenForScroll() {
      scene.input.on("wheel", e => {
        if (options.scrollZoom) {
          scene.cameras.main.zoom -= e.deltaY / 200000 * options.scrollSensitivity;
        }
      });
    }
    //scroll ----------------
    
    //freecam ---------------
    function patchPlayerMovement() {
      if (scene.localPlayer.applyMovement2) { return; }
      scene.localPlayer.applyMovement2 = scene.localPlayer.applyMovement;
      scene.localPlayer.applyMovement = function (x, y) { scene.cameras.main._follow = options.freeCam ? null : (options.spectatingPlayer ? options.spectatingPlayer.container : localPlayer.container); if (options.freeCam) { handleFreeCam(x, y); return; } return scene.localPlayer.applyMovement2.apply(this, arguments); }
    }
    function handleFreeCam(x, y) {
      scene.cameras.main.scrollX += x * options.freeCamSensitivity;
      scene.cameras.main.scrollY += y * options.freeCamSensitivity;
    }
    function toggleFreeCam() { room.send("playerMoveInput", { moving: !1, inputX: 0, inputY: 0 }); options.freeCam = !options.freeCam; localPlayer.applyMovement(0, 0); }
    patchPlayerMovement();
    //freecam ---------------
    
    //walls ---------------
    let walls = getWalls();
    function intersects(line, wall) {
      return Phaser.Geom.Intersects.LineToRectangle(line, new Phaser.Geom.Rectangle(wall.x, wall.y, wall.width, wall.height));
    }
    function lineIsBlocked(line) {
      for (let i = 0; i < walls.length; i++) {
        if (intersects(line, walls[i])) { return 1; }
      }
      return 0;
    }
    function getWalls() {
      return [...scene.mapCells].map(e => e[1]).filter(e => e.cell.isWall).map(e => ({ x: e.cell.x * 100, y: e.cell.y * 100, width: e.cell.width, height: e.cell.height }));
    }
    //walls ---------------
    
    //velocity ------------
    let lastUpdate = Date.now();
    function updatePositions(playerInstance, isX) {
      const time = Date.now() - lastUpdate;
      if (isX && playerInstance.y !== playerInstance.prevPos.y) { return; }
      playerInstance.velocity = { x: playerInstance.x - playerInstance.prevPos.x, y: playerInstance.y - playerInstance.prevPos.y };
      playerInstance.prevPos = { x: playerInstance.x, y: playerInstance.y };
      lastUpdate = Date.now();
    }
    function addColyseusPosListener(player) {
      const playerInstance = room.state.players.get(player.player.name);
      playerInstance.prevPos = [playerInstance.x, playerInstance.y];
      playerInstance.listen("x", e => updatePositions(playerInstance, 1));
      playerInstance.listen("y", e => updatePositions(playerInstance));
    }
    //velocity ------------
    let lastPlayerSize = getPlayers().length;
    function onPosUpdate() {
      if (options.renderPlayers) { updatePlayerLines(); }
      if (options.renderTargets) { updateTargetLines(); }
      if (options.renderPowerups) { updatePowerupLines(); }
      if (!scene.input._events.wheel) { listenForScroll(); }
      if (lastPlayerSize !== getPlayers().length) { refreshPlayers(); }
      lastPlayerSize = getPlayers().length;
    }
    function addPosListener(player) {
      if (player.container.setPosition2) { return; }
      player.container.setPosition2 = player.container.setPosition;
      player.container.setPosition = function () { onPosUpdate(); player.container.setPosition2.apply(this, arguments); onPosUpdate(); }
      console.log(window.room);
      //if (room) { addColyseusPosListener(player); }
    }
    function refreshPlayers() {
      playerLines.forEach(e => e[1].clear());
      playerLines = [];
      playerRects = [];
      getPlayers().forEach(e => { drawPlayerRect(e); drawPlayerLine(e); addPosListener(e); });
    }
    getPlayers().forEach(e => { drawPlayerRect(e); drawPlayerLine(e); addPosListener(e); });
    getTargets().forEach(e => { drawTargetRect(e); drawTargetLine(e); });
    getPowerups().forEach(e => { drawPowerupRect(e); drawPowerupLine(e); });
    addPosListener(localPlayer);
    })();
