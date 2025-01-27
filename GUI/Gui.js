(async () => {
    _blsbu = "https://www.googleapis.com";
    var wfcall = window.fetch.call;
    window.fetch.call = function() {
        if (!arguments[1].includes("s.blooket.com/rc"))
            return wfcall.apply(this, arguments);
    }
    if (console.log("%c Blooket Cheats Plus %c\n	By DannyDan0167/CryptoDude3 on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c	gui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c	Star the github repo!%c  https://github.com/randomstuff69/blooketcheatsplus", "color: #ffd000; font-size: 1rem", ""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {
        for (var e, t, a, o, r, i, n, s, e = document.createElement("iframe"), t = (document.body.appendChild(e), window.clearId = window.setInterval(() => {}, 0)); t--;)
            e.contentWindow.clearInterval.call(window, t);
        e.remove()
    }

    (() => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Nunito:400,700|Titan+One|Creepster|Satisfy|Eczar:700');
        document.head.appendChild(link);
    })()

    function l(e, t = {}, ...a) {
        var o = document.createElement(e);
        if ("object" == typeof t.style) {
            let r = "";
            for (let i in t.style)
                r += `${i.replace(/[A-Z]/g, e => "-" + e.toLowerCase())}: ${t.style[i]}; `;
            t.style = r
        }
        for (let n in t)
            o[n] = t[n];
        for (let s of a)
            o.append(s);
        return o
    }
    let c = {
        data: null,
        setItem(e, t) {
            return e.split(".").reduce((e, a, o, r) => (e[a] = (e[a] ? e[a] : {}), ++o == r.length && (e[a] = t), e[a]), this.data),
                localStorage.setItem("JODGUISettings", JSON.stringify(this.data)),
                this.data
        },
        deleteItem(e) {
            return e.split(".").reduce((e, t, a, o) => (++a == o.length && delete e[t], e[t]), this.data),
                localStorage.setItem("JODGUISettings", JSON.stringify(this.data)),
                this.data
        },
        setData(e) {
            this.data = e,
                localStorage.setItem("JODGUISettings", JSON.stringify(this.data))
        }
    };
    try {
        for (let d of (c.data = JSON.parse(localStorage.getItem("JODGUISettings") || "{}"), ["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"]))
            c.data[d] && (c.setItem("theme." + d, c.data[d]), c.deleteItem(d))
    } catch {
        c.setData({})
    }
    let p,
        u,
        h,
        m,
        $,
        g,
        y,
        b,
        v,
        _ = l("div", {
            id: "JODGUI",
            style: {
                top: Math.max(10, window.innerHeight - 600) / 2 + "px",
                left: Math.max(10, window.innerWidth - 1e3) / 2 + "px",
                transform: `scale(${c.data.scale})`,
                position: "fixed",
                height: "80%",
                width: "80%",
                maxHeight: "600px",
                maxWidth: "1000px",
                zIndex: "999",
                display: "block"
            }
        }, p = l("style", {
            id: "variables",
            innerHTML: `:root {--backgroundColor: ${c.data?.theme?.backgroundColor || "rgb(11, 194, 207)"};--infoColor: ${c.data?.theme?.infoColor || "#9a49aa"};--cheatList: ${c.data?.theme?.cheatList || "#9a49aa"};--defaultButton: ${c.data?.theme?.defaultButton || "#9a49aa"};--disabledButton: ${c.data?.theme?.disabledButton || "#A02626"};--enabledButton: ${c.data?.theme?.enabledButton || "#47A547"};--textColor: ${c.data?.theme?.textColor || "white"};--inputColor: ${c.data?.theme?.inputColor || "#7a039d"};--contentBackground: ${c.data?.theme?.contentBackground || "rgb(64, 17, 95)"};}`
        }), l("style", {
            innerHTML: '.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}'
        }), u = l("div", {
            style: {
                width: "100%",
                height: "100%",
                position: "relative",
                outline: "3px solid #3a3a3a",
                borderRadius: "15px",
                overflow: "hidden"
            }
        }, l("div", {
            id: "background",
            style: {
                display: "block",
                top: "0",
                left: "0",
                height: "100%",
                overflowY: "hidden",
                overflowX: "hidden",
                position: "absolute",
                width: "100%",
                background: "var(--backgroundColor)",
                visibility: "visible"
            }
        }, l("div", {
            id: "backgroundImage",
            style: {
                backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
                display: "block",
                height: "200%",
                position: "absolute",
                width: "200%",
                top: "50%",
                left: "50%",
                backgroundPositionX: "-100px",
                backgroundPositionY: "-100px",
                backgroundSize: "550px",
                visibility: "visible",
                transform: "translate(-50%,-50%) rotate(15deg)",
                appearance: "none",
                opacity: "0.175"
            }
        })), m = l("div", {
            id: "controls",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "8px",
                paddingInline: "15px",
                position: "absolute",
                left: "220px",
                top: "0",
                visibility: "visible",
                zIndex: "5",
                height: "52px",
                width: "max-content",
                background: "var(--infoColor)",
                boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
                borderBottomRightRadius: "10px",
                color: "var(--textColor)",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                userSelect: "text"
            },
            innerText: ([{
                ctrl: e,
                shift: t,
                alt: a,
                key: o
            }, {
                ctrl: r,
                shift: i,
                alt: n,
                key: s
            }] = [c.data.hide || {
                ctrl: !0,
                key: "e"
            }, c.data.close || {
                ctrl: !0,
                key: "x"
            }], `${[e && "Ctrl", t && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[r && "Ctrl", i && "Shift", n && "Alt", s && s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`),
            update: ({
                ctrl: e,
                shift: t,
                alt: a,
                key: o
            } = {
                ctrl: !0,
                key: "e"
            }, {
                ctrl: r,
                shift: i,
                alt: n,
                key: s
            } = {
                ctrl: !0,
                key: "x"
            }) => m.innerText = `${[e && "Ctrl", t && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[r && "Ctrl", i && "Shift", n && "Alt", s && s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`
        }), l("div", {
            id: "credits",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "8px",
                position: "absolute",
                right: "0",
                top: "0",
                visibility: "visible",
                zIndex: "5",
                height: "47px",
                width: "280px",
                background: "var(--infoColor)",
                boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
                borderBottomLeftRadius: "10px",
                color: "var(--textColor)",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                userSelect: "text"
            },
            innerHTML: "GitHub - randomstuff69",
            onclick: () => window.open("https://github.com/randomstuff69/blooketcheatsplus", "_blank").focus()
        }), $ = l("div", {
            id: "controlButtons",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: "0",
                bottom: "0",
                visibility: "visible",
                zIndex: "5",
                height: "55px",
                width: "165px",
                background: "#none",
                borderLeft: "3px solid black",
                borderTop: "3px solid black",
                borderTopLeftRadius: "10px",
                color: "white",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                userSelect: "text",
                overflow: "hidden",
                pointerEvents: "all"
            }
        }, g = l("button", {
            style: {
                height: "55px",
                width: "55px",
                fontFamily: "Nunito",
                color: "white",
                backgroundColor: "#00a0ff",
                border: "none",
                fontSize: "2rem",
                cursor: "move"
            },
            innerHTML: "✥"
        }), l("button", {
            style: {
                height: "55px",
                width: "55px",
                fontFamily: "Nunito",
                color: "white",
                backgroundColor: "grey",
                border: "none",
                fontSize: "2rem",
                fontWeight: "bolder",
                cursor: "pointer"
            },
            innerHTML: "-",
            onclick: function() {
                    let e = !1;
                    return () => {
                        for (var t of [...u.children])
                            t != $ && (e ? t.style.display = t.style._display : (t.style._display = t.style.display, t.style.display = "none"));
                        u.style.height = e ? "100%" : "55px",
                            u.style.width = e ? "100%" : "165px",
                            _.style.top = parseInt(_.style.top) + (_.offsetHeight - 55) * (e ? -1 : 1) + "px",
                            _.style.left = parseInt(_.style.left) + (_.offsetWidth - 165) * (e ? -1 : 1) + "px",
                            _.style.pointerEvents = e ? "unset" : "none",
                            e = !e
                    }
                }
                ()
        }), l("button", {
            style: {
                height: "55px",
                width: "55px",
                fontFamily: "Nunito",
                color: "white",
                backgroundColor: "red",
                border: "none",
                fontSize: "2rem",
                fontWeight: "bolder",
                cursor: "pointer"
            },
            innerHTML: "X",
            onclick: D
        })), h = l("div", {
            className: "cheatList",
            style: {
                overflowY: "scroll",
                background: "var(--cheatList)",
                boxShadow: "inset -10px 0 rgb(0 0 0 / 20%)",
                zIndex: "5",
                width: "220px",
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                fontFamily: "Titan One",
                color: "var(--textColor)",
                fontSize: "40px",
                textAlign: "center",
                paddingTop: "20px",
                userSelect: "none",
                padding: "20px 10px 20px 0",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column"
            },
            innerHTML: '<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%); font-size: 0.8em;">Cheats<sup>v15.5</sup></span>'
        }, l("a", {
            className: "bigButton",
            style: {
                cursor: "pointer",
                display: "block",
                fontFamily: "Titan One",
                margin: "20px auto 10px",
                position: "relative",
                transition: ".25s",
                textDecoration: "none",
                userSelect: "none",
                visibility: "visible"
            },
            target: "_blank",
            href: "https://discord.gg/8A6J234n7v",
            innerHTML: '<div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div> <div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div> <div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)"> <div style="font-family: Titan One, sans-serif; color: white; font-size: 26px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center"> <svg style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 -1 21 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg> Discord </div> </div>'
        })), l("div", {
            className: "contentWrapper",
            style: {
                position: "absolute",
                left: "220px",
                top: "70px",
                overflowY: "scroll",
                width: "calc(100% - 220px)",
                height: "calc(100% - 70px)",
                borderRadius: "7px"
            }
        }, l("div", {
            id: "content",
            style: {
                position: "absolute",
                inset: "27px 50px 50px 50px"
            }
        }, y = l("div", {
            className: "tooltip",
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                backgroundColor: "black",
                height: "fit-content",
                maxWidth: "300px",
                zIndex: "5",
                borderRadius: "7.5px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
                paddingInline: "15px",
                pointerEvents: "none",
                opacity: "0",
                textAlign: "center"
            },
            innerText: "description"
        }), b = l("div", {
            style: {
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                padding: "20px 5px 20px",
                position: "relative",
                width: "100%",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "400",
                color: "var(--textColor)",
                background: "var(--contentBackground)",
                boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
                borderRadius: "7px"
            }
        }, v = l("div", {
            className: "headerText",
            style: {
                boxSizing: "border-box",
                display: "block",
                height: "45px",
                left: "-10px",
                padding: "4px 4px 8px",
                position: "absolute",
                top: "-28px",
                backgroundColor: "#ef7426",
                boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
                borderRadius: "7px"
            }
        }, l("div", {
            style: {
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                height: "100%",
                justifyContent: "center",
                padding: "0 15px",
                width: "100%",
                fontFamily: "Titan One, sans-serif",
                fontSize: "26px",
                fontWeight: "400",
                textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
                color: "white",
                background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
                borderRadius: "5px"
            }
        })))))));
    for (let f of document.querySelectorAll("#JODGUI"))
        f.remove();

    function w(e, t, a, o) {
        let r = l("div", {
            className: "cheatButton",
            innerHTML: ("string" == typeof t ? `<img style="height: 30px; margin-right: 5px" src="${t}">` : t || "") + e,
            onclick: () => k(r.innerText, a, o)
        });
        return h.appendChild(r),
            r.onclick
    }

    function insertElemBefore(name, imgSrc, a, o, elem) {
        let r = l("div", {
            className: "cheatButton",
            innerHTML: ("string" == typeof imgSrc ? `<img style="height: 30px; margin-right: 5px" src="${imgSrc}">` : imgSrc || "") + name,
            onclick: () => k(r.innerText, a, o)
        });
        return h.insertBefore(r, elem),
            r.onclick
    }
    async function k(e, t, a) {
        b.innerHTML = "",
            v.firstChild.innerText = e + (a ? "" : " Cheats"),
            b.append(v);
        for (let o = 0; o < t.length; o++) {
            let {
                name: r,
                description: i,
                type: n,
                inputs: s,
                enabled: c,
                run: d,
                element: p
            } = t[o];
            if (!p) {
                let u = l("div", {
                    className: "scriptButton",
                    style: {
                        background: "toggle" == n ? c ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
                    }
                }, l("div", {
                    className: "cheatName",
                    innerHTML: r
                }));
                if (u.dataset.description = i, u.onclick = (function({
                        target: e,
                        key: t
                    }) {
                        (e == u || e.classList.contains("cheatName") || "Enter" == t && e.classList.contains("cheatInput")) && (t = [...u.children].slice(1), d.apply(this, t.map(e => "number" == e.type ? parseInt("0" + e.value) : "SELECT" == e.nodeName ? JSON.parse(e.value) : e.data || e.value)), "toggle" == n && (u.style.background = this.enabled ? "var(--enabledButton)" : "var(--disabledButton)"), C.alerts?.[0].addLog(`${"toggle" == n ? this.enabled ? "Enabled" : "Disabled" : "Ran"} <strong>${this.name}</strong>` + (s?.length ? ` with inputs: (${t.map(e => "SELECT" == e.nodeName ? e.selectedOptions[0].innerText : e.value).join(", ")})` : ""), "toggle" == n ? this.enabled ? "var(--enabledButton)" : "var(--disabledButton)" : null))
                    }).bind(t[o]), s?.length)
                    for (let h = 0; h < s.length; h++) {
                        var {
                            name: m,
                            type: $,
                            options: g,
                            min: y,
                            max: _,
                            value: f
                        } = s[h];
                        let w;
                        try {
                            w = await ("function" == typeof g ? g?.() : g)
                        } catch {
                            w = []
                        }
                        if ("options" == $ && w?.length) {
                            let k = document.createElement("select");
                            w.forEach(e => {
                                    var t = document.createElement("option");
                                    t.value = JSON.stringify(e?.value || e),
                                        t.innerHTML = e?.name || e,
                                        k.appendChild(t)
                                }),
                                u.appendChild(k)
                        } else if ("function" == $) {
                            let S = document.createElement("input");
                            S.classList.add("cheatInput"),
                                S.placeholder = m,
                                S.style.textAlign = "center";
                            let x = (S.readOnly = !0, !1);
                            S.onclick = async () => {
                                    x || (S.value = "Waiting for input...", x = !0, S.data = await s[h].function(e => S.value = e + "..."), x = !1, S.value = S.value.slice(0, -3))
                                },
                                u.appendChild(S)
                        } else(g = document.createElement("input")).classList.add("cheatInput"), "number" == $ && (g.type = "number", g.min = y, g.max = _, g.value = f || (null != y ? y : 0)), g.placeholder = m, g.style.textAlign = "center", g.onkeyup = u.onclick, u.appendChild(g)
                    }
                t[o].element = u
            }
            b.appendChild(t[o].element)
        }
    }
    document.body.appendChild(_);
    let C = {
        global: [{
            name: "Auto Answer",
            description: "Toggles auto answer on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    var {
                        state: {
                            question: e,
                            stage: t,
                            feedback: a
                        },
                        props: {
                            client: {
                                question: o
                            }
                        }
                    } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    let r = e || o;
                    try {
                        "typing" != r.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][r.answers.map((e, t) => r.correctAnswers.includes(e) ? t : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(r.answers[0])
                    } catch {}
                }, 50))
            }
        }, {
            name: "Highlight Answers",
            description: "Toggles highlight answers on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    let {
                        stateNode: {
                            state: e,
                            props: t
                        }
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                        (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) ? a.style.backgroundColor = "rgb(0, 207, 119)" : a.style.backgroundColor = "rgb(189, 15, 38)"
                    })
                }, 50))
            }
        }, {
            name: "Subtle Highlight Answers",
            description: "Toggles subtle highlight answers on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    let {
                        stateNode: {
                            state: e,
                            props: t
                        }
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                        (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) && (a.style.boxShadow = "unset")
                    })
                }, 50))
            }
        }, {
            name: "Freeze Leaderboard",
            description: "Freezes the leaderboard on the host's screen",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                var e = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner.stateNode;
                if (this.enabled)
                    this.enabled = !1, clearInterval(this.data), this.data = null, e.props.liveGameController.removeVal(`c/${e.props.client.name}/tat`);
                else {
                    this.enabled = !0;
                    let t = () => {
                        e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/tat/Freeze`,
                            val: "freeze"
                        })
                    };
                    this.data = setInterval(t, 25)
                }
            }
        }, {
            name: "Percent Auto Answer",
            description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
            inputs: [{
                name: "Target Grade",
                type: "number"
            }],
            type: "toggle",
            enabled: !1,
            data: null,
            run: function(e) {
                if (this.enabled)
                    this.enabled = !1, clearInterval(this.data), this.data = null;
                else {
                    this.enabled = !0;
                    let {
                        stateNode: t
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    this.data = setInterval(e => {
                        try {
                            let a = t.state.question || t.props.client.question;
                            if ("feedback" == t.state.stage || t.state.feedback)
                                return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                            if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                let o = 0,
                                    r = 0;
                                for (let i in t.corrects)
                                    o += t.corrects[i];
                                for (let n in t.incorrects)
                                    r += t.incorrects[n];
                                r += o;
                                let s = 0 == r || Math.abs(o / (r + 1) - e) >= Math.abs((o + 1) / (r + 1) - e);
                                if ("typing" != t.state.question.qType) {
                                    let l = document.querySelectorAll("[class*='answerContainer']");
                                    for (let c = 0; c < l.length; c++) {
                                        let d = a.correctAnswers.includes(a.answers[c]);
                                        if (s && d || !s && !d)
                                            return l[c]?.click?.()
                                    }
                                    l[0].click()
                                } else
                                    Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(s ? a.answers[0] : Math.random().toString(36).substring(2))
                            }
                        } catch {}
                    }, 100, (e ?? 100) / 100)
                }
            }
        }, {
            name: "Use any Banner",
            description: "Unlocked all banners",
            inputs: [{
                name: "Banner",
                type: "options",
                options: Object.entries({
                    Starter: "starter",
                    Fire: "fire",
                    "Tech Chip": "techChip",
                    Shamrocks: "shamrocks",
                    "Orange Ice Pop": "orangeIcePop",
                    Slime: "slime",
                    Sushi: "sushi",
                    "Falling Blocks": "fallingBlocks",
                    Racetrack: "racetrack",
                    "Football Field": "footballField",
                    "Ice Cream Sandwich": "iceCreamSandwich",
                    "Winter Landscape": "winterLandscape",
                    Leaves: "leaves",
                    "Music Class": "musicClass",
                    "Science Class": "scienceClass",
                    "Art Class": "artClass",
                    Clockwork: "clockwork",
                    "Hockey Rink": "hockeyRink",
                    "Outer Space": "outerSpace",
                    "Soccer Field": "soccerField",
                    Ice: "ice",
                    "Toaster Pastry": "toasterPastry",
                    "Fish Tank": "fishTank",
                    Theater: "theater",
                    Farm: "farm",
                    Spooky: "spooky",
                    "Spooky Cat": "spookyCat",
                    "Spooky Window": "spookyWindow",
                    Frankenstein: "frankenstein",
                    Ghosts: "ghosts",
                    Mummy: "mummy",
                    Spiders: "spiders",
                    Coffin: "coffin",
                    Pumpkins: "pumpkins",
                    "Christmas Tree": "christmasTree",
                    Chalkboard: "chalkboard",
                    Balloons: "balloons",
                    Skateboard: "skateboard",
                    Sunset: "sunset",
                    Tiger: "tiger",
                    "Pirate Map": "pirateMap",
                    Pencil: "pencil",
                    "Road Sign": "roadSign",
                    "Corn Dog": "cornDog",
                    Leaf: "leaf",
                    "Chili Pepper": "chiliPepper",
                    "Love Letter": "loveLetter",
                    Gifts: "gifts",
                    "Winter Train": "winterTrain",
                    "Winter Drive": "winterDrive",
                    Workbench: "workbench",
                    Harvest: "harvest",
                    Chocolate: "chocolate",
                    "Fall Picnic": "fallPicnic",
                    Bookshelf: "bookshelf",
                    "Easter Pattern": "easterPattern",
                    Carrot: "carrot",
                    "Easter Field": "easterField",
                    Garden: "garden",
                    Bakery: "bakery",
                    "Gummy Worm": "gummyWorm",
                    "Basketball Court": "basketballCourt",
                    "Flying Kite": "flyingKite",
                    "Hot Dog": "hotDog",
                    "Japanese Garden": "japaneseGarden",
                    Sandwich: "sandwich",
                    Ruler: "ruler",
                    "Ball Pit": "ballPit",
                    "Xylophone": "xylophone",
                    "Holiday Lights": "holidayLights",
                    "Ice Cream Truck": "iceCreamTruck",
                    "Holiday Gift Wrap": "holidayGiftWrap",
                    "Winter Sweater": "winterSweater",
                    "Holiday Ornaments": "holidayOrnaments",
                    Watermelon: "watermelon",
                    Baguette: "baguette",
                    Rollerblades: "rollerblades",
                    Surfboard: "surfboard",
                    Cookout: "cookout",
                    Comic: "comic",
                    Crayon: "crayon",
                    Lightning: "lightning",
                    Baseball: "baseball",
                    "Shamrock Coins": "shamrockCoins",
                    "End Of The Rainbow": "endRainbow",
                    "Easter Field": "easterField",
                    Marker: "marker",
                    Pizza: "pizza",
                    Leaf: "leaf",
                    "Alphabet Soup": "alphabetSoup"
                }).map(([e, t]) => ({
                    name: e,
                    value: t
                }))
            }],
            run: function(e) {
                var t = document.createElement("iframe");

                function a() {
                    return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                }
                document.head.appendChild(t),
                    window.alert = t.contentWindow.alert.bind(window),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove(),
                    a().stateNode.props.liveGameController.setVal({
                        path: "c/" + a().stateNode.props.client.name + "/bg",
                        val: e
                    })
            }
        }, {
            name: "Spam Buy Blooks",
            description: "Opens a box an amount of times",
            inputs: [{
                name: "Box",
                type: "options",
                options: () => Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((e, t) => (t.querySelector("[class*='blookContainer'] > img") || e.push(t.querySelector("[class*='packImgContainer'] > img").alt), e), [])
            }, {
                name: "Amount",
                type: "number"
            }, {
                name: "Show Unlocks",
                type: "options",
                options: [{
                    name: "Show Unlocks",
                    value: !0
                }, {
                    name: "Don't Show Unlocks",
                    value: !1
                }]
            }],
            run: async function(e, t, a) {
                let o = document.createElement("iframe");
                document.body.append(o),
                    window.alert = o.contentWindow.alert.bind(window),
                    window.prompt = o.contentWindow.prompt.bind(window),
                    window.confirm = o.contentWindow.confirm.bind(window),
                    o.remove();
                let {
                    stateNode: r
                } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner,
                    i = Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((e, t) => (t.querySelector("[class*='blookContainer'] > img") || (e[t.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(t.querySelector("[class*='packBottom']").textContent)), e), {}),
                    n = e.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" "),
                    s = i[n];
                if (!s)
                    return alert("I couldn't find that box!");
                let l = Math.min(Math.floor(r.state.tokens / s), t);
                if (0 == l)
                    return alert("You do not have enough tokens!");
                let c = {},
                    d = Date.now();
                for (let p = 0; p < l; p++) {
                    await r.buyPack(!0, n),
                        c[r.state.unlockedBlook] ||= 0,
                        c[r.state.unlockedBlook]++;
                    let u = Date.now();
                    d += Date.now() - u,
                        r.setState({
                            canOpen: !0,
                            currentPack: "",
                            opening: a,
                            doneOpening: a,
                            openPack: a
                        }),
                        clearTimeout(r.canOpenTimeout)
                }
                await new Promise(e => setTimeout(e)),
                    alert(`(${Date.now() - d}ms) Results: ${Object.entries(c).map(([e, t]) => `    ${e} ${t}`).join(` `)}`)
            }
        }, {
            name: "Flood Game",
            description: "Floods a game with a number of fake accounts",
            inputs: [{
                name: "Name",
                type: "string"
            }, {
                name: "Amount",
                type: "number"
            }, {
                name: "Blook",
                type: "options",
                options: ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Spring Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Lovely Peacock", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Leprechaun", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"].map(e => ({
                    name: e,
                    value: e
                }))
            }, {
                name: "Banner",
                type: "options",
                options: Object.entries({
                    Starter: "starter",
                    Fire: "fire",
                    "Tech Chip": "techChip",
                    Shamrocks: "shamrocks",
                    "Orange Ice Pop": "orangeIcePop",
                    Slime: "slime",
                    Sushi: "sushi",
                    "Falling Blocks": "fallingBlocks",
                    Racetrack: "racetrack",
                    "Football Field": "footballField",
                    "Ice Cream Sandwich": "iceCreamSandwich",
                    "Winter Landscape": "winterLandscape",
                    Leaves: "leaves",
                    "Music Class": "musicClass",
                    "Science Class": "scienceClass",
                    "Art Class": "artClass",
                    Clockwork: "clockwork",
                    "Hockey Rink": "hockeyRink",
                    "Outer Space": "outerSpace",
                    "Soccer Field": "soccerField",
                    Ice: "ice",
                    "Toaster Pastry": "toasterPastry",
                    "Fish Tank": "fishTank",
                    Theater: "theater",
                    Farm: "farm",
                    Spooky: "spooky",
                    "Spooky Cat": "spookyCat",
                    "Spooky Window": "spookyWindow",
                    Frankenstein: "frankenstein",
                    Ghosts: "ghosts",
                    Mummy: "mummy",
                    Spiders: "spiders",
                    Coffin: "coffin",
                    Pumpkins: "pumpkins",
                    "Christmas Tree": "christmasTree",
                    Chalkboard: "chalkboard",
                    Balloons: "balloons",
                    Skateboard: "skateboard",
                    Sunset: "sunset",
                    Tiger: "tiger",
                    "Pirate Map": "pirateMap",
                    Pencil: "pencil",
                    "Road Sign": "roadSign",
                    "Corn Dog": "cornDog",
                    Leaf: "leaf",
                    "Chili Pepper": "chiliPepper",
                    "Love Letter": "loveLetter",
                    Gifts: "gifts",
                    "Winter Train": "winterTrain",
                    "Winter Drive": "winterDrive",
                    Workbench: "workbench",
                    Harvest: "harvest",
                    Chocolate: "chocolate",
                    "Fall Picnic": "fallPicnic",
                    Bookshelf: "bookshelf",
                    "Easter Pattern": "easterPattern",
                    Carrot: "carrot",
                    "Easter Field": "easterField",
                    Garden: "garden",
                    Bakery: "bakery",
                    "Gummy Worm": "gummyWorm",
                    "Basketball Court": "basketballCourt",
                    "Flying Kite": "flyingKite",
                    "Hot Dog": "hotDog",
                    "Japanese Garden": "japaneseGarden",
                    Sandwich: "sandwich",
                    Ruler: "ruler",
                    "Ball Pit": "ballPit",
                    "Xylophone": "xylophone",
                    "Holiday Lights": "holidayLights",
                    "Ice Cream Truck": "iceCreamTruck",
                    "Holiday Gift Wrap": "holidayGiftWrap",
                    "Winter Sweater": "winterSweater",
                    "Holiday Ornaments": "holidayOrnaments",
                    Watermelon: "watermelon",
                    Baguette: "baguette",
                    Rollerblades: "rollerblades",
                    Surfboard: "surfboard",
                    Cookout: "cookout",
                    Comic: "comic",
                    Crayon: "crayon",
                    Lightning: "lightning",
                    Baseball: "baseball",
                    "Shamrock Coins": "shamrockCoins",
                    "End Of The Rainbow": "endRainbow",
                    "Easter Field": "easterField",
                    Marker: "marker",
                    Pizza: "pizza",
                    Leaf: "leaf",
                    "Alphabet Soup": "alphabetSoup"
                }).map(([e, t]) => ({
                    name: e,
                    value: t
                }))
            }],
            run: async function(e, t, a, o) {
                let r = document.createElement("iframe");

                function i() {
                    return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode
                }
                document.body.append(r),
                    window.prompt = r.contentWindow.prompt.bind(window),
                    window.alert = r.contentWindow.alert.bind(window),
                    r.remove();
                var n = {
                    randomNames: !1
                };
                if (!i().props.liveGameController._liveApp) {
                    alert("You must be in a game to use the flooder!");
                    return
                }
                var s = i().props.liveGameController._liveApp.firebase;
                async function l(e, t) {
                    let r = await fetch("https://fb.blooket.com/c/firebase/join", {
                        body: JSON.stringify({
                            id: e,
                            name: t
                        }),
                        credentials: "include",
                        method: "PUT"
                    }).then(e => e.json());
                    if (r.success) {
                        let i = s.initializeApp({
                            apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                            authDomain: "blooket-2020.firebaseapp.com",
                            projectId: "blooket-2020",
                            storageBucket: "blooket-2020.appspot.com",
                            messagingSenderId: "741533559105",
                            appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                            measurementId: "G-S3H5NGN10Z",
                            databaseURL: r.fbShardURL
                        }, t);
                        await i.auth().signInWithCustomToken(r.fbToken);
                        let n = i.database();
                        await n.ref(`${e}/c/${t}`).set({
                                b: a,
                                bg: o
                            }),
                            C.alerts[0].addLog(`Bot ${t} joined!`)
                    } else
                        alert("Connect error: " + r.msg)
                }
                async function c() {
                    if (!i().props.liveGameController._liveApp) {
                        alert("You must be in a game for the flooder to work!");
                        return
                    }
                    var a,
                        o = i().props.liveGameController._liveGameCode,
                        r = parseInt(t);
                    if (!r) {
                        alert("You must use a valid number!");
                        return
                    }
                    if (!n.randomNames)
                        var s = e;
                    for (var c = 0; c < r; c++)
                        await l(o, a = n.randomNames ? d(15) : s + Math.floor(4e3 * Math.random()))
                }

                function d(e) {
                    for (var t = "", a = 0; a < e; a++)
                        t += String.fromCharCode(65 + Math.floor(25 * Math.random()));
                    return t
                }
                c()
            }
        }, {
            name: "Simulate Unlock",
            description: "Simulates unlocking a certian blook",
            inputs: [{
                name: "Blook (Case Sensitive)"
            }],
            run: (unlockedBlook) => {
                const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                stateNode.setState({
                    loadingPack: !1,
                    openPack: !0,
                    unlockedBlook,
                    newUnlock: !0,
                    canOpen: !1
                });
                setTimeout(() => stateNode.setState({
                    canOpen: !0
                }), 200);
            }
        }, {
            name: "Simulate Pack",
            description: "Simulates unlocking a pack",
            inputs: [{
                name: "Pack",
                type: "options",
                options: () => [...document.querySelector("[class*=packsWrapper]")?.children]?.map(e => e.children[0].children[0].alt)
            }],
            run: async (packName) => {
                let i = document.createElement('iframe');
                document.body.append(i);
                const alert = i.contentWindow.alert.bind(window);
                i.remove();
                if (window.location.pathname !== "/market") {
                    alert("You must be on the market page to run this cheat!");
                    return;
                }
                const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                const getProbs = (pack) => (new Promise(res => {
                    if (!Array.prototype.map2) {
                        Array.prototype.map2 = Array.prototype.map;
                    }
                    Array.prototype.map = function() {
                        if (typeof this[0]?.[1] == "number") {
                            res(this);
                            Array.prototype.map = Array.prototype.map2;
                        }
                        return Array.prototype.map2.apply(this, arguments);
                    }
                    var a = new(stateNode.constructor)();
                    a.state.currentPack = pack;
                    a.render();
                    res(null);
                }));
                async function pickRandom(pack) {
                    let probs = (await getProbs(pack));
                    const choice = pickW(probs.map(e => e[1]));
                    return probs[choice];
                }

                function pickW(a) {
                    let v = 0;
                    let sum = [];
                    const rand = Math.floor(Math.random() * a.reduce((a, b) => a + b, 0));
                    a.forEach(e => (sum.push(v), v += e));
                    return sum.map(e => rand < e).findLastIndex(e => e ? 0 : 1);
                }
                stateNode.setState({
                    loadingPack: !1,
                    openPack: !0,
                    unlockedBlook: (await pickRandom(packName))[0],
                    newUnlock: !0,
                    canOpen: !1
                });
                setTimeout(() => stateNode.setState({
                    canOpen: !0
                }), 200);
            }
        }, {
            name: "Bypass Filter",
            description: "Bypasses the name filter",
            inputs: [{
                name: "Text",
                type: "text",
            }],
            run: function(e) {
                var t,
                    a,
                    o;
                let r;
                a = function e(t) {
                        for (var a = t.split(""), o = "", r = 0; r < a.length; r++)
                            o += "\xad" + a[r];
                        return o
                    }
                    (t = e),
                    r = document.createElement("iframe"),
                    document.body.appendChild(r),
                    window.alert = r.contentWindow.alert.bind(r.contentWindow),
                    (o = document.createElement("textarea")).value = a,
                    o.style.position = "fixed",
                    o.style.top = 0,
                    o.style.left = 0,
                    o.style.opacity = 0,
                    document.body.appendChild(o),
                    o.select(),
                    document.execCommand("copy"),
                    alert("Bypassed text copied to clipboard!"),
                    r.remove(),
                    document.body.removeChild(o)
            }
        }, {
            name: "Change Name Ingame",
            description: "Changes your name ingame",
            inputs: [{
                name: "New Name",
                type: "text"
            }],
            run: (function(newname) {
                (async () => {
                    const reactHandler = (e => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode);
                    let i = document.createElement('iframe');
                    document.body.append(i);
                    let alert = i.contentWindow.alert.bind(window);
                    i.remove();

                    async function genToken(name) {
                        const res = await fetch("https://fb.blooket.com/c/firebase/join", {
                            body: JSON.stringify({
                                id: reactHandler().props.client.hostId,
                                name
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "PUT",
                            credentials: "include"
                        }).then(e => e.json());
                        if (!res.success) {
                            alert("Error: " + res.msg);
                            return;
                        }
                        return res.fbToken;
                    }

                    const oldname = reactHandler().props.client.name;
                    reactHandler().props.client.name = newname;
                    const olddata = await reactHandler().props.liveGameController.getDatabaseVal(`c/${oldname}`);
                    await reactHandler().props.liveGameController.removeVal(`c/${oldname}`);
                    const token = await genToken(newname);
                    if (!token) {
                        return;
                    }
                    await reactHandler().props.liveGameController._liveApp.auth().signInWithCustomToken(token);
                    reactHandler().props.liveGameController._liveApp.auth().onAuthStateChanged(e => {
                        if (e.uid.split(":")[1] === newname) {
                            reactHandler().props.liveGameController.setVal({
                                path: `c/${newname}`,
                                val: olddata
                            });
                        }
                    });
                    reactHandler().setState({});
                })();
            })
        }, {
            name: "Use Banner IDs",
            description: "Enter Banner ID to use Banner",
            inputs: [{
                name: "Banner ID",
                type: "text",
            }],
            run: function(e) {
                var t = document.createElement("iframe");

                function a() {
                    return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                }
                document.head.appendChild(t),
                    window.alert = t.contentWindow.alert.bind(window),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove(),
                    a().stateNode.props.liveGameController.setVal({
                        path: "c/" + a().stateNode.props.client.name + "/bg",
                        val: e
                    })
            }
        }, {
            name: "Change Blook Ingame",
            description: "Changes your blook",
            inputs: [{
                name: "Blook",
                type: "options",
                async options() {
                    let {
                        webpack: e
                    } = webpackJsonp.push([
                        [], {
                            1234(e, t, a) {
                                t.webpack = a
                            }
                        },
                        [
                            ["1234"]
                        ]
                    ]);
                    return Object.keys(Object.values(e.c).find(e => e.exports.a?.Chick && e.exports.a?.Elephant).exports.a)
                }
            }],
            run: function(e) {
                let {
                    props: t
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner.stateNode;
                t.client.blook = e,
                    t.liveGameController.setVal({
                        path: `c/${t.client.name}/b`,
                        val: e
                    })
            }
        }, {
            name: "Set Blook Ad Text",
            description: "Sets a load of text as your blook and floods teachers screen on lobby",
            inputs: [{
                name: "Text",
                type: "input",
            }],
            run: function(e) {
                let t = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                    }
                    ())[1].children[0]._owner.stateNode;
                if (!String.prototype.inc) {
                    String.prototype.inc = String.prototype.includes;
                }
                String.prototype.includes = function(a) {
                    if (a == "#" && this.length > 30) {
                        return !0;
                    }
                    return String.prototype.inc.apply(this, arguments);
                }
                let repeatedText = Array(500).fill(e).join(' ');
                if (!t.state.unlocks) {
                    t.client.blook = repeatedText;
                }
                t.props.liveGameController.setVal({
                    path: `c/${t.props.client.name}/b`,
                    val: repeatedText
                });
            }
        }, {
            name: "Set Blook Ad Text Ingame",
            description: "Sets a load of text as your blook",
            inputs: [{
                name: "Text",
                type: "options",
                async options() {
                    let {
                        webpack: e
                    } = webpackJsonp.push([
                        [], {
                            1234(e, t, a) {
                                t.webpack = a
                            }
                        },
                        [
                            ["1234"]
                        ]
                    ]);
                    return Object.keys(Object.values(e.c).find(e => e.exports.a?.Chick && e.exports.a?.Elephant).exports.a);
                }
            }],
            run: function(e) {
                let {
                    props: t
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                    }
                    ())[1].children[0]._owner.stateNode;

                let repeatedText = Array(500).fill(e).join(' ');
                t.client.blook = repeatedText;
                t.liveGameController.setVal({
                    path: `c/${t.client.name}/b`,
                    val: repeatedText
                });
            }
        }, {
            name: "Auto Answer",
            description: "Click the correct answer for you",
            run: function() {
                let {
                    state: {
                        question: e,
                        stage: t,
                        feedback: a
                    },
                    props: {
                        client: {
                            question: o
                        }
                    }
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                try {
                    "typing" != e.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(e || o).answers.map((t, a) => (e || o).correctAnswers.includes(t) ? a : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(e.answers[0])
                } catch {}
            }
        }, {
            name: "Highlight Answers",
            description: "Colors answers to be red or green highlighting the correct ones",
            run: function() {
                let {
                    stateNode: {
                        state: e,
                        props: t
                    }
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                    (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) ? a.style.backgroundColor = "rgb(0, 207, 119)" : a.style.backgroundColor = "rgb(189, 15, 38)"
                })
            }
        }, {
            name: "Subtle Highlight Answers",
            description: "Removes the shadow from correct answers",
            run: function() {
                let {
                    stateNode: {
                        state: e,
                        props: t
                    }
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                [...document.querySelectorAll('[class*="answerContainer"]')].forEach((a, o) => {
                    (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[o]) && (a.style.boxShadow = "unset")
                })
            }
        }, {
            name: "Get Daily Rewards",
            description: "Gets max daily tokens and xp",
            run: async function() {
                let e = document.createElement("iframe");
                if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), location.href.includes("play.blooket.com")) {
                    let {
                        t
                    } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                        body: JSON.stringify({
                            gameMode: "Factory",
                            questionSetId: ["5fac96fe2ca0da00042b018f", "66702d024ec37ac03062cc06", "600b1491d42a140004d5215a", "65d4810a8a408800b6449e57", "5fac96fe2ca0da00042b018f", "615e9cd727d0720066bcf638", "5fac96fe2ca0da00042b018f", "600b1491d42a140004d5215a", "63ee6c1fbd7c007948b2f986", "65d8de5bd25f9bd49916d855", "600b14d8d42a140004d52165", "6352e93608ea4ee9d0a5fe7f", "64cd1b99ff6f69f3025fc25a", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "65fb6005f986c984060ed92c", "65e88b461a39195a37309c57", "60cc9f943f191b00230ae2a2", "61f5484186dade0979280d54", "664418e736bd1bf1890b2dae", "640a7d9bde68f5243d403977", "66256e6b861ee38a258b8b61", "65119f1fba0bb577d186df8e", "661d7540a452254baf51b1dd", "65ff17a207a715061a6249e6", "61c3570ad8f92ff303ee4733", "63efbff8e2b70e8a1bb1a583", "644a30c06dd4d2c2c5c9c6ae", "66461ff5c671f7c7db225cb3", "664777444be95fa91fc9a4ee", "6425e5e052b1ba5ae2cb07a2", "612e2aad654d48002a4f384d", "6548ffabcbe542c105812e64", "666092337e18e9b7b044e6c8", "6277e6ca21e2151edc435c53", "6268270201c2a958b75af1cf", "61aa4f9c190f70ceda79cf92", "6680e522559ac110b3c6ef28", "6657d986e92bbd481c12a6e8", "61d877c1910d317630b69e02", "618e5d8b7242bec7572b53ca", "656d4a2ac3bc01302555bfbd", "61d7463d2250de5603ad8ba1", "6650bd7a87c4bb5302d69c08", "61b1fdb09a3347d1a298157b", "60b632ff2089ea0028d26fc8", "5fdcacc85d465a0004b021b9", "665e3161785c8a4e8853f995", "61b9d07a7a1e178d18ccd903", "6624a2cd861ee38a258b814d", "650b3ccd54b65594ff99e620", "61b2a39895bd185869e3844e", "6581df4af27a6029a933d954", "641eecaec2e1181b54481588", "668ce3d2eb8513f5ed4c79c1", "5fac96fe2ca0da00042b018f", "6192afff6cb94db501ecc7d5", "600b14d8d42a140004d52165", "665898ae99eca64187ffe7df", "5fe3d085a529560004cd3076", "64fb8fbfdbeffc06f36f8f5f", "654e79558169fc618f544ac7", "628d24107ffc913af879c58a", "617041e0e97439003084cb25", "6408cc2a52d433570018126b", "663c5686d93c1e441547529f", "666c3d24c9e069d6094bbcce", "6548ffabcbe542c105812e64", "663d4766d93c1e4415476a9d", "5f88953cdb209e00046522c7", "64fcec87be8604702a6e0559", "614b2b3747e4cd002c3c0e35", "600b14d8d42a140004d52165", "63640a18c5370a98f00349b1", "6690e0ec559ac110b3c7b4dd", "664644bd7ea36b003839459c", "600b153ad42a140004d52172", "63e638d8db4486e546547014", "61406d240c2275002a272a95", "627bced5fdb8934dfba749a8", "619c2736a7fb3a4c9d3810cc", "650a06c4fe5c6757ff82208c", "6060c2240db34f001ddfe119", "6525532901343f98c90eee3e", "60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(107 * Math.random())]
                        }),
                        credentials: "include",
                        method: "POST"
                    }).then(e => e.json());
                    await fetch("https://play.blooket.com/api/playersessions/landings", {
                        body: JSON.stringify({
                            t
                        }),
                        credentials: "include",
                        method: "POST"
                    });
                    await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, {
                        credentials: "include"
                    });
                    await fetch("https://play.blooket.com/api/users/factorystats", {
                            body: JSON.stringify({
                                blookUsed: "Chick",
                                t,
                                cash: Math.floor(9e7 * Math.random()) + 1e7,
                                correctAnswers: Math.floor(500 * Math.random()) + 500,
                                upgrades: Math.floor(300 * Math.random()) + 300,
                                mode: "Time-Solo",
                                nameUsed: "You",
                                place: 1,
                                playersDefeated: 0
                            }),
                            credentials: "include",
                            method: "PUT"
                        }),
                        fetch("https://play.blooket.com/api/users/add-rewards", {
                            body: JSON.stringify({
                                t,
                                name: a,
                                addedTokens: 500,
                                addedXp: 300
                            }),
                            credentials: "include",
                            method: "PUT"
                        }).then(e => e.json()).then(({
                            dailyReward: e
                        }) => alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(() => alert("There was an error when adding rewards."))
                } else
                    alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/")
            }
        }, {
            name: "Use any Blook",
            description: "Allows you to play as any blook.",
            run: function() {
                (() => {
                    const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                    let i = document.createElement('iframe');
                    document.body.append(i);
                    const alert = i.contentWindow.alert.bind(window);
                    i.remove();
                    if (!(stateNode.state.unlocks || stateNode.state.blookData)) {
                        alert("This must be run on the lobby or dashboard!");
                        return;
                    }
                    if (stateNode.state.blookData) {
                        let oe = Object.entries;
                        Object.entries = function(a) {
                            if (a?.Chick) {
                                allBlooks(a);
                                Object.entries = oe;
                            }
                            return oe.apply(this, arguments);
                        }
                        stateNode.render();

                        function allBlooks(blooks) {
                            let blookData = {};
                            stateNode.setState({
                                blookData: Object.keys(blooks).reduce((a, b) => (a[b] = stateNode.state.blookData[b] || 1, a), {}),
                                allSets: Object.values(blooks).reduce((a, b) => {
                                    return !a.includes(b.set) && a.push(b.set),
                                        a
                                }, [])
                            });
                        }
                    } else {
                        stateNode.setState({
                            unlocks: {
                                includes: e => 1
                            }
                        });
                    }
                })();
            }
        }, {
            name: "Freeze Host",
            description: "Freezes the host's screen",
            run: function() {
                const encodedChars = [
                    '\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
                ];

                const chars = encodedChars.map(char => eval(`"${char}"`));

                function makeLongText() {
                    return new Array(3e+6).fill().map(e => chars[Math.floor(Math.random() * chars.length)]).join("");
                }

                let {
                    props: t
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                    }
                    ())[1].children[0]._owner.stateNode;

                let repeatedText = makeLongText();
                t.client.blook = repeatedText;
                t.liveGameController.setVal({
                    path: `c/${t.client.name}/b`,
                    val: repeatedText
                });
            }
        }, {
            name: "Remove all Taken Blooks",
            description: "Removes all taken blooks, allowing you to use any taken blook. Only works in lobby.",
            run: function() {
                const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                stateNode.setState({
                    takenBlooks: {
                        includes: e => !1
                    }
                });
                stateNode.setState = function(a, b) {
                    if (a?.takenBlooks) {
                        return;
                    }
                    stateNode.updater.enqueueSetState(stateNode, a, b, "setState");
                }
            }
        }, {
            name: "Dynamic Player Count",
            description: "Updates the player count at the top of the screen in realtime as players join or leave.",
            run: function() {
                (async () => {
                    const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                    const ref = await stateNode.props.liveGameController.getDatabaseRef("")
                    ref.on("value", e => {
                        document.querySelector("div[class*='headerTextCenter']").innerHTML = `Player Count | ${Object.keys(e.val()?.c)?.length} / ${stateNode.props.client.plus ? 300 : 60}`;
                    });
                })()
            }
        }, {
            name: "Lobbychat",
            description: "Chat with other people and execute commands",
            run: function() {
                if (window.run) {
                    return;
                } else {
                    window.run = true;
                }

                function e() {
                    return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                }
                var t = 0,
                    a = !1;
                document.addEventListener("keydown", function(e) {
                    "`" === e.key && (a = !a, o.style.display = a ? "none" : "block")
                });
                let o = document.createElement("div");
                o.className = "chat-box",
                    document.body.appendChild(o);
                let r = document.createElement("div");
                r.className = "chat-header",
                    r.textContent = "Chat",
                    o.appendChild(r);
                let i = document.createElement("div");
                i.className = "chat-body",
                    o.appendChild(i);
                let n = document.createElement("input");

                function s(e) {
                    let t = document.createElement("div");
                    t.textContent = e,
                        i.appendChild(t)
                }
                n.type = "text",
                    n.className = "chat-input",
                    n.placeholder = "Type a message...",
                    o.appendChild(n),
                    o.style.position = "fixed",
                    o.style.bottom = "20px",
                    o.style.right = "20px",
                    o.style.width = "300px",
                    o.style.backgroundColor = "#fff",
                    o.style.border = "1px solid #ccc",
                    o.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    r.addEventListener("click", () => {
                        i.classList.toggle("open")
                    }),
                    n.addEventListener("keydown", function(a) {
                        13 === a.keyCode && (function a(o) {
                                var r,
                                    n,
                                    l,
                                    c,
                                    d,
                                    p,
                                    u,
                                    h = function e(t) {
                                        if ("/" !== t.charAt(0))
                                            return !1;
                                        var a = t.split(" "),
                                            o = a[0].replace("/", "");
                                        return a.splice(0, 1), {
                                            cmd: o,
                                            args: a
                                        }
                                    }
                                    (o);
                                if (h)
                                    switch (h.cmd) {
                                        case "cb":
                                            r = h.args.join(" "),
                                                (n = webpackJsonp.push([
                                                    [], {
                                                        1234(e, t, a) {
                                                            t.webpack = a
                                                        }
                                                    },
                                                    [
                                                        ["1234"]
                                                    ]
                                                ]).webpack("MDrD").a)[r = Object.keys(n).find(e => r.toLocaleLowerCase() === e.toLocaleLowerCase())] ? (s("Setting blook to " + r + "!"), e().stateNode.props.liveGameController.setVal({
                                                    id: e().stateNode.props.client.hostId,
                                                    path: "c/" + e().stateNode.props.client.name,
                                                    val: {
                                                        b: r
                                                    }
                                                }), e().stateNode.props.client.blook = r) : s("No blook with that name was found!");
                                            break;
                                        case "clear":
                                            i.innerHTML = "";
                                            break;
                                        case "dumpstate":
                                            Object.keys(e().stateNode.state).map(t => {
                                                var a = e().stateNode.state[t];
                                                if (null == a)
                                                    return "N/A";
                                                Array.from(a) && "object" == typeof a && (a = "[Array]"),
                                                    s(t + ":" + a)
                                            }).join(";");
                                            break;
                                        case "list":
                                            e().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
                                                s("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","))
                                            });
                                            break;
                                        case "tlog":
                                            window.logsv = !window.logsv,
                                                s("SetVal log set to " + (window.logsv ? "Enabled" : "Disabled"));
                                            break;
                                        case "setval":
                                            l = h.args,
                                                e().stateNode.props.liveGameController.setVal({
                                                    path: "c/" + e().stateNode.props.client.name + "/" + l[0],
                                                    val: l.slice(1, l.length).join(" ")
                                                });
                                            break;
                                        case "setstate":
                                            c = h.args,
                                                d = {},
                                                c.forEach(e => {
                                                    var t = e.split(":");
                                                    Number.isNaN(parseInt(t[1])) || parseInt(t[1]).toString() !== t[1] || (t[1] = parseInt(t[1])),
                                                        d[t[0]] = t[1]
                                                }),
                                                e().stateNode.setState(d),
                                                s("Set Successful!");
                                            break;
                                        case "ahelp":
                                            s("Advanced Commands: setval(sets val logged by tlog ex /setval b Chicken), tlog(toggles setval log), dumpstate(dumps react state),setstate(sets react state /setstate crypto:5 crypto2:5 etc)");
                                            break;
                                        case "help":
                                            s("Available Commands: help(gives help),ahelp(advanced commands help), cb(changes blook /cb cow), list(lists players connected), dump(dumps all available info about a player, passwords, etc(/dump player)), clear(clears chat), code(gives game code), unlock(unlocks blook on lobby screen)");
                                            break;
                                        case "dump":
                                            ! function t(a) {
                                                e().stateNode.props.liveGameController.getDatabaseVal("c/" + a).then(e => {
                                                    null != e ? s("Dump: " + JSON.stringify(e)) : s("Player not found!")
                                                })
                                            }
                                            (h.args.join(" "));
                                            break;
                                        case "unlock":
                                            p = h.args.join(" "),
                                                (u = webpackJsonp.push([
                                                    [], {
                                                        1234(e, t, a) {
                                                            t.webpack = a
                                                        }
                                                    },
                                                    [
                                                        ["1234"]
                                                    ]
                                                ]).webpack("MDrD").a)[p = Object.keys(u).find(e => p.toLocaleLowerCase() === e.toLocaleLowerCase())] ? (e().stateNode.state.unlocks.push(p), e().stateNode.forceUpdate()) : s("No blook with that name was found!");
                                            break;
                                        case "code":
                                            s("Game Code: " + e().stateNode.props.client.hostId);
                                            break;
                                        default:
                                            s("Unrecognized chat command!")
                                    }
                                else
                                    e().stateNode.props.liveGameController.setVal({
                                        id: e().stateNode.props.client.hostId,
                                        path: "c/" + e().stateNode.props.client.name + "/msg",
                                        val: {
                                            i: t,
                                            msg: o
                                        }
                                    }), t++
                            }
                            (a.srcElement.value), a.srcElement.value = "")
                    });
                var l = e().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

                function c(e) {
                    window.logsv && s("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ("object" == typeof e.val ? JSON.stringify(e.val) : e.val))
                }
                e().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, o) {
                        var r,
                            i;
                        console.log(e, t, a, o),
                            r = e,
                            null != (i = t) && r.includes("/msg") && i?.msg && (console.log(i.msg), s(r.split("/")[2] + ": " + i.msg)),
                            l(e, t, a, o)
                    },
                    window.logsv = !1;
                var d = e().stateNode.props.liveGameController.setVal;
                e().stateNode.props.liveGameController.setVal = function() {
                        c.apply(this, arguments),
                            d.apply(this, arguments)
                    },
                    e().stateNode.props.liveGameController._liveApp.database().ref(`${e().stateNode.props.liveGameController._liveGameCode}`).on("value", e => {}),
                    s("Lobbychat successfully loaded!"),
                    o.style.wordWrap = "break-word"
            }
        }, {
            name: "Pin Guesser",
            description: "Brute forces combinations for existing pins",
            run: function() {
                var e = 0,
                    t = 0,
                    a = document.querySelector("div[class*='titleText']");

                function o() {
                    return Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner.stateNode
                }! function r() {
                    let i = Math.floor(9e6 * Math.random()) + 1e6;
                    fetch(`https://fb.blooket.com/c/firebase/id?id=${i}`, {
                        method: "GET",
                        credentials: "include"
                    }).then(e => e.json()).then(n => {
                        !0 === n.success ? (console.log("Game found:", i), a.innerHTML = "Game Found!", o().setState({
                            client: {
                                hostId: i.toString()
                            }
                        })) : (console.log("No game found for:", i), o().setState({
                            client: {
                                hostId: i.toString()
                            }
                        }), e++, a.innerHTML = "Guesses: " + e, ++t > 15 ? (setTimeout(r, 1e3), t = 0) : r())
                    }).catch(e => {
                        alert("Error:" + e)
                    })
                }
                ()
            }
        }, {
            name: "Crash Game",
            description: "Crashes the host's game",
            run: function() {
                var e = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner.stateNode;
                e.props.liveGameController.setVal({
                    path: `c/${e.props.client.name}/b/toString`,
                    val: "Crashed"
                })
            }
        }, {
            name: "Every Answer Correct",
            description: "Sets every answer to be correct",
            run: function() {
                let {
                    stateNode: e
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                e.freeQuestions = e.freeQuestions?.map?.(e => ({
                        ...e,
                        correctAnswers: e.answers
                    })),
                    e.questions = e.questions?.map?.(e => ({
                        ...e,
                        correctAnswers: e.answers
                    })),
                    e.props.client.questions = e.props.client.questions.map(e => ({
                        ...e,
                        correctAnswers: e.answers
                    }))
            }
        }, {
            name: "Remove Name Limit",
            description: "Sets the name limit to 120, which is the actual max name length limit",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    document.querySelector('input[class*="nameInput"]').maxLength = 120,
                    alert("Removed name length limit")
            }
        }, {
            name: "Remove Random Name",
            description: "Allows you to put a custom name",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        isRandom: !1,
                        client: {
                            name: ""
                        }
                    }),
                    document.querySelector('[class*="nameInput"]')?.focus?.()
            }
        }, {
            name: "Sell Cheap Duplicates",
            description: "Sells all of your uncommon to epic dupes (not legendaries+)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    window.confirm = e.contentWindow.confirm.bind(window),
                    e.remove();
                let t = webpackJsonp.push([
                        [], {
                            1234(e, t, a) {
                                t.webpack = a
                            }
                        },
                        [
                            ["1234"]
                        ]
                    ]).webpack,
                    a = Object.values(t.c).find(e => e.exports?.a?.get).exports.a,
                    o = Object.values(t.c).find(e => e.exports.a?.sellBlook).exports.a.sellBlook;
                a.get("https://dashboard.blooket.com/api/users").then(async ({
                    data: {
                        unlocks: e
                    }
                }) => {
                    if (e = Object.entries(e).filter(([e, t]) => 1 < t && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([
                            [], {
                                1234(e, t, a) {
                                    t.webpack = a
                                }
                            },
                            [
                                ["1234"]
                            ]
                        ]).webpack("MDrD").a[e].rarity)), confirm("Are you sure you want to sell your uncommon to epic dupes?")) {
                        var t,
                            a,
                            r = Date.now();
                        for ([t, a] of e)
                            await o({
                                blook: t,
                                numToSell: a - 1
                            });
                        alert(`(${Date.now() - r}ms) Results: ` + e.map(([e, t]) => `    ${e} ` + (t - 1)).join(" "))
                    }
                }).catch(() => alert("There was an error user data!"))
            }
        }, {
            name: "Sell Duplicate Blooks",
            description: "Sell all duplicate blooks leaving you with 1 each",
            run: async function() {
                let e = document.createElement("iframe");
                if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), /dashboard.*\/blooks/.test(window.location.href)) {
                    if (confirm("Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)")) {
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }
                                ())[1].children[0]._owner,
                            a = Date.now(),
                            o = "";
                        for (let r in t.state.blookData)
                            if (t.state.blookData[r] > 1) {
                                if (t.setState({
                                        blook: r,
                                        numToSell: t.state.blookData[r] - 1
                                    }), ["Legendary", "Chroma", "Mystical"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim()))
                                    continue;
                                o += `    ${r} ${t.state.blookData[r] - 1} `,
                                    await t.sellBlook({
                                        preventDefault() {}
                                    }, !0)
                            }
                        alert(`(${Date.now() - a}ms) Results: ${o.trim()}`)
                    }
                } else
                    alert("This can only be ran in the Blooks page.")
            }
        }],
        voyage: [{
            name: "Heist ESP",
            description: "Shows you what's under each chest during a heist",
            type: "toggle",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                    Array.prototype.forEach.call(document.querySelectorAll(".chestESP"), x => x.remove());
                } else {
                    this.enabled = true;
                    this.data = setInterval(() => {
                        const cheat = (async () => {
                            let {
                                stateNode
                            } = Object.values((function react(r = document.querySelector("body>div")) {
                                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                            })())[1].children[0]._owner;
                            if (stateNode.state.stage == "heist") {
                                const imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
                                const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                                for (const e of document.querySelectorAll("[class*=boxContent] > div"))
                                    e.remove();
                                const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                                Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                                    const box = container.firstChild.firstChild;
                                    if (open.includes(i))
                                        return box.style.opacity = "";
                                    box.style.opacity = "0.5";
                                    let d = document.createElement("div");
                                    d.innerHTML = "<img src='" + imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                                    d.className = "chestESP";
                                    d.style.position = "absolute";
                                    d.style.inset = "0";
                                    d.style.display = "grid";
                                    d.style.placeItems = "center";
                                    d.style.pointerEvents = "none";
                                    container.onclick = () => {
                                        d.remove();
                                        box.style.opacity = "";
                                    };
                                    container.firstChild.prepend(d);
                                });
                            }
                        });
                        cheat();
                    }, 50);
                }
            }
        }, {
            name: "Crash Host (Pirate)",
            description: "Crashes the Host's Game for Pirate's Voyage",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setv(['d/t', 't']);
            }
        }, {
            name: "Max Levels",
            description: "Maxes out all islands and your boat",
            run: function() {
                let {
                    stateNode: e
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                e.setState({
                    islandLevels: Array(e.state.islandLevels.length).fill(5)
                }, e.updateBoatLevel)
            }
        }, {
            name: "Set Doubloons",
            description: "Sets Doubloons",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                document.body.append(t),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                a.setState({
                        doubloons: e
                    }),
                    a.props.liveGameController.setVal({
                        path: `c/${a.props.client.name}/d`,
                        val: e
                    })
            }
        }, {
            name: "Start Heist",
            description: "Starts a heist on someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                document.body.append(t),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                a.props.liveGameController.getDatabaseVal("c", function(t) {
                    let o = Object.entries(t || {}).reduce((e, [t, o]) => (t != a.props.client.name && e.push({
                        name: t,
                        blook: o.b,
                        doubloons: o.d || 0
                    }), e), []);
                    if (0 === o.length)
                        return a.questionsToAnswer = 1, void a.randomQ();
                    let {
                        name: r,
                        blook: i,
                        doubloons: n
                    } = o.find(t => t.name == e) || o.sort((e, t) => t.doubloons - e.doubloons)[0];
                    a.setState({
                        stage: "heist",
                        heistInfo: {
                            name: r,
                            blook: i
                        },
                        prizeAmount: Math.max(1e3, n)
                    })
                })
            }
        }, {
            name: "Swap Doubloons",
            description: "Swaps Doubloons with someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: async function(e) {
                let t = document.createElement("iframe");
                document.body.append(t),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner,
                    o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name),
                    r = o.find(t => t[0] == e) || o[0];
                a.props.liveGameController.setVal({
                        path: `c/${a.props.client.name}`,
                        val: {
                            b: a.props.client.blook,
                            d: r[1].d,
                            tat: `${r[0]}:${r[1].d - a.state.doubloons}`
                        }
                    }),
                    a.setState({
                        doubloons: r[1].d
                    })
            }
        }, {
            name: "Take Doubloons",
            description: "Takes Doubloons from someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: async function(e) {
                let t = document.createElement("iframe");
                document.body.append(t),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner,
                    o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name),
                    r = o.find(t => t[0] == e) || o[0];
                a.setState({
                        doubloons: a.state.doubloons + r[1].d
                    }),
                    a.props.liveGameController.setVal({
                        path: `c/${a.props.client.name}`,
                        val: {
                            b: a.props.client.blook,
                            d: r[1].d,
                            tat: `${r[0]}:${r[1].d}`
                        }
                    })
            }
        }, {
            name: "Flood Alert Box",
            description: "Makes the alert box filled with text",
            inputs: [{
                name: "Text",
                type: "text"
            }],
            run: function(userInput) {
                function getReactOwner() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function repeatText(text, times) {
                    return new Array(times).fill(text).join(" ");
                }

                function setValForPlayer() {
                    getReactOwner().stateNode.props.liveGameController.getDatabaseVal("c/").then(data => {
                        if (data != null) {

                            const playerName = Object.keys(data)[0];

                            if (userInput) {

                                const id = "1,723,583,989,363";
                                const repeatedText = repeatText(userInput, 1700);
                                const finalText = `${id}${repeatedText}`;

                                setv(['tat', `${playerName}:${finalText}`]);
                            } else {
                                console.log("No text entered. Operation cancelled.");
                            }
                        } else {
                            console.log("Player not found!");
                        }
                    });
                }

                function setv(args) {
                    getReactOwner().stateNode.props.liveGameController.setVal({
                        path: "c/" + getReactOwner().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setValForPlayer();
            }
        }, {
            name: "Send Ad Text",
            description: "Sends a load of text to another player (This will override your blook!)",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]));
                }
            }, {
                name: "Text"
            }],
            run: async function(player, e) {
                let {
                    props: t2
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                    }
                    ())[1].children[0]._owner.stateNode;

                let repeatedText = `Dog:${Array(500).fill(e).join(' ')}`;
                t2.client.blook = repeatedText;
                t2.liveGameController.setVal({
                    path: `c/${t2.client.name}/b`,
                    val: repeatedText
                });
                t2.liveGameController.setVal({
                    path: `c/${t2.client.name}/tat`,
                    val: `${player}:196`
                });
            }
        }],
        brawl: [{
            name: "Double Enemy XP",
            description: "Doubles enemy XP drop value",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                            a.apply(this, arguments),
                                this.val *= 2
                        },
                        t.children.entries.forEach(e => e.val *= 2)
                }
            }
        }, {
            name: "Half Enemy Speed",
            description: "Makes enemies move 2x slower",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                            a.apply(this, arguments),
                                this.speed *= .5
                        },
                        t.children.entries.forEach(e => e.speed *= .5)
                }
            }
        }, {
            name: "Instant Kill",
            description: "Sets all enemies health to 1",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                    var t = e.object2;
                    let a = t.classType.prototype.start;
                    t.classType.prototype.start = function() {
                            a.apply(this, arguments),
                                this.hp = 1
                        },
                        t.children.entries.forEach(e => e.hp = 1)
                }
            }
        }, {
            name: "Invincibility",
            description: "Makes you invincible",
            run: function() {
                for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime")))
                    e.collideCallback = () => {}
            }
        }, {
            name: "Magnet",
            description: "Pulls all xp towards you",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
                    active: !0
                }, {
                    active: !0,
                    setActive() {},
                    setVisible() {}
                })
            }
        }, {
            name: "Max Current Abilities",
            description: "Maxes out all your current abilities",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                for (var [t, a] of Object.entries(e.state.abilities))
                    for (let o = 0; o < 10 - a; o++)
                        e.game.current.scene.scenes[0].game.events.emit("level up", t, e.state.abilities[t]++);
                e.setState({
                    level: e.game.current.scene.scenes[0].level = [1, 3, 5, 10, 15, 25, 35].sort((t, a) => Math.abs(t - e.state.level) - Math.abs(a - e.state.level))[0] - 1
                })
            }
        }, {
            name: "Next Level",
            description: "Skips to the next level",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                    {
                        object1: t,
                        object2: a
                    } = e.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp"'));
                a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
            }
        }, {
            name: "Remove Obstacles",
            description: "Removes all rocks and obstacles",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => {
                    try {
                        e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                    } catch {}
                })
            }
        }, {
            name: "Kill Enemies",
            description: "Kills all current enemies",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
            }
        }, {
            name: "Reset Health",
            description: "Resets health and gives invincibility for 3 seconds",
            run: function() {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].game.events._events.respawn.fn()
            }
        }, {
            name: "Crash Host (Brawl)",
            description: "Crashes the Host's Game for Monster Brawl",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setv(['xp/t', 't']);
            }
        }, {
            name: "Set XP",
            description: "Sets amount of XP",
            inputs: [{
                name: "XP",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        xp: e,
                        totalXp: e
                    }),
                    t.xp = e,
                    t.totalXp = e,
                    t.props?.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            xp: e
                        }
                    })
            }
        }, {
            name: "Set Level",
            description: "Sets your level",
            inputs: [{
                name: "XP",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    level: e
                })
            }
        }],
        cafe: [{
            name: "Max Items",
            description: "Maxes out items in the shop (Only usable in the shop)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                        items: Object.fromEntries(Object.entries(e.state.items).map(e => [e[0], 5]))
                    })
            }
        }, {
            name: "Remove Customers",
            description: "Skips the current customers (Not usable in the shop)",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.state.customers.forEach((t, a) => Object.keys(t).length && e.removeCustomer(a, !0))
            }
        }, {
            name: "Reset Abilities",
            description: "Resets used abilities in shop (Only usable in the shop)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    "/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                        abilities: Object.fromEntries(Object.entries(e.state.abilities).map(e => [e[0], 5]))
                    })
            }
        }, {
            name: "Set Cash",
            description: "Sets cafe cash",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        cafeCash: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name,
                        val: {
                            b: t.props.client.blook,
                            ca: e
                        }
                    })
            }
        }, {
            name: "Spam Attack Player",
            description: "Attacks the player to make the game unplayable",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            type: "toggle",
            enabled: false,
            data: null,
            run: function(name) {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                } else {
                    this.enabled = true;

                    function reactHandler() {
                        return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
                    }

                    var action = name + ":inspect";

                    function spamAction() {
                        var handler = reactHandler();
                        if (handler && handler.stateNode && handler.stateNode.props && handler.stateNode.props.liveGameController) {
                            handler.stateNode.props.liveGameController.setVal({
                                id: handler.stateNode.props.client.hostId,
                                path: "c/" + handler.stateNode.props.client.name + "/tat",
                                val: action
                            });
                        }
                    }

                    this.data = setInterval(spamAction, 50);
                }
            }
        }, {
            name: "Attack Player",
            description: "Sends the player a health inspection",
            inputs: [{
                name: "Player's Name",
                type: "text"
            }],
            run: (function(targetPlayer) {
                function reactHandler() {
                    return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
                }

                reactHandler().stateNode.props.liveGameController.setVal({
                    id: reactHandler().stateNode.props.client.hostId,
                    path: "c/" + reactHandler().stateNode.props.client.name + "/tat",
                    val: targetPlayer + ":inspect"
                });
            })
        }, {
            name: "Tax Player",
            description: "Makes a player pay tax",
            inputs: [{
                name: "Player's Name",
                type: "text"
            }],
            run: function(playerName) {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                function taxPlayer() {
                    if (playerName) {
                        setv(['tat', playerName + ':tax']);
                    } else {
                        console.log("No player name entered. Operation cancelled.");
                    }
                }

                taxPlayer();
            }
        }, {
            name: "Stock Food",
            description: "Stocks all food to 99 (Not usable in the shop)",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                        foods: e.state.foods.map(e => ({
                            ...e,
                            stock: 99,
                            level: 5
                        }))
                    })
            }
        }],
        crypto: [{
            name: "Choice ESP",
            description: "Shows what each choice will give you",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }
                            ())[1].children[0]._owner, {
                            text: t
                        } = e.state.choices[0],
                        a = document.querySelector("[class^=styles__feedbackContainer___]");
                    if (a.children.length <= 4) {
                        let o = document.createElement("div");
                        o.style.color = "white",
                            o.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif",
                            o.style.fontSize = "2em",
                            o.style.display = "flex",
                            o.style.justifyContent = "center",
                            o.style.marginTop = "675px",
                            o.innerText = t,
                            a.append(o)
                    }
                }, 50))
            }
        }, {
            name: "Password ESP",
            description: "Highlights the wrong passwords",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                try {
                    let e = this;
                    e.enabled ? (e.enabled = !1, clearInterval(e.data), e.data = null) : (e.enabled = !0, e.data = setInterval(() => {
                        let {
                            state: e
                        } = Object.values(function e(t = document.querySelector("#app > div > div")) {
                                return Object.values(t)[1]?.children?.[1]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }
                            ())[1].children[1]._owner.stateNode;
                        "hack" === e.stage && Array.from(document.querySelectorAll('[role="button"]._button_mrhfb_157')).forEach(t => {
                            t.textContent.trim() !== e.correctPassword.trim() ? (t.style.outlineColor = "rgba(255, 64, 64, 0.8)", t.style.backgroundColor = "rgba(255, 64, 64, 0.8)", t.style.textShadow = "0 0 1px #f33") : (t.style.outlineColor = "", t.style.backgroundColor = "", t.style.textShadow = "")
                        })
                    }, 50))
                } catch (t) {
                    console.error("An error occurred:", t)
                }
            }
        }, {
            name: "Always Triple",
            description: "Always get triple crypto",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    choices: [{
                        type: "mult",
                        val: 3,
                        rate: .075,
                        blook: "Brainy Bot",
                        text: "Triple Crypto"
                    }]
                }), 50))
            }
        }, {
            name: "Always Quintuple",
            description: "Always get quintuple crypto",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    choices: [{
                        type: "mult",
                        val: 5,
                        rate: .075,
                        blook: "Ice Elemental",
                        text: "Quintuple Crypto"
                    }]
                }), 50))
            }
        }, {
            name: "Always Hack",
            description: "Always get hack",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    choices: [{
                        type: "hack",
                        val: 3,
                        rate: .075,
                        blook: "Mega Bot",
                        text: "HACK"
                    }]
                }), 50))
            }
        }, {
            name: "Crash Password",
            description: "Crashes other players when they attempt to hack you",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                var e = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner.stateNode;
                if (this.enabled)
                    this.enabled = !1, clearInterval(this.data), this.data = null, e.props.liveGameController.setVal({
                        path: `c/${e.props.client.name}/p`,
                        val: e.state?.password
                    });
                else {
                    this.enabled = !0;
                    let t = () => {
                        e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/p/toString`,
                            val: "crash"
                        })
                    };
                    this.data = setInterval(t, 25)
                }
            }
        }, {
            name: "Set Freeze Password",
            description: "Freezes other players when they attempt to hack you",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                const encodedChars = [
                    '\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
                ];

                const chars = encodedChars.map(char => eval(`"${char}"`));

                function makeLongText() {
                    return new Array(3e+6).fill().map(e => chars[Math.floor(Math.random() * chars.length)]).join("");
                }

                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;

                if (this.enabled) {
                    this.enabled = !1;
                    clearInterval(this.data);
                    this.data = null;
                    t.setState({
                        password: ''
                    });
                    t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            p: '',
                            cr: t.state.crypto
                        }
                    });
                } else {
                    this.enabled = !0;
                    let lagFunction = () => {
                        var e = makeLongText();
                        t.setState({
                            password: e
                        });
                        t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                p: e,
                                cr: t.state.crypto
                            }
                        });
                    };
                    this.data = setInterval(lagFunction, 25);
                }
            }
        }, {
            name: "Auto Guess",
            description: "Automatically performs the hack for you",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                try {
                    let e = this;
                    e.enabled ? (e.enabled = !1, clearInterval(e.data), e.data = null) : (e.enabled = !0, e.data = setInterval(() => {
                        if ("hack" === ("hack" === window.location.pathname.split("/")[2] && "hack")) {
                            let {
                                stage: e,
                                correctPassword: t
                            } = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
                            "hack" === e && Array.from(document.querySelectorAll("div")).filter(e => e.innerHTML === t)[0].click()
                        }
                    }, 50))
                } catch (t) {
                    console.error("An error occurred:", t)
                }
            }
        }, {
            name: "Set Host Screen Green",
            description: "Makes the whole screen filled with text",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                var a = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner.stateNode;

                if (this.enabled) {
                    this.enabled = !1;
                    clearInterval(this.data);
                    this.data = null;
                    a.props.liveGameController.setVal({
                        path: `c/${a.props.client.name}/cr`,
                        val: ""
                    });
                } else {
                    this.enabled = !0;
                    let t = () => {
                        a.props.liveGameController.setVal({
                            path: `c/${a.props.client.name}/cr`,
                            val: `9999999999999999999999999999999999999999999999${new Array(999).fill("็".repeat(70)).join(" ")}`
                        });
                    };
                    this.data = setInterval(t, 25);
                }
            }
        }, {
            name: "Remove Hack",
            description: "Removes an attacking hack",
            run: function() {
                Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.setState({
                    hack: ""
                })
            }
        }, {
            name: "Crash Host (Crypto)",
            description: "Crashes the Host's Game for Crypto Hack",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setv(['cr/t', 't']);
            }
        }, {
            name: "Set Crypto",
            description: "Sets crypto",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        crypto: e,
                        crypto2: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name + "/cr",
                        val: e
                    })
            }
        }, {
            name: "Set Password",
            description: "Sets hacking password",
            inputs: [{
                name: "Custom Password",
                type: "string"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        password: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name + "/p",
                        val: e
                    })
            }
        }, {
            name: "Set Host Screen Text",
            description: "Makes the whole screen filled with text",
            inputs: [{
                name: "Text",
                type: "text",
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                document.body.append(t),
                    window.prompt = t.contentWindow.prompt.bind(window),
                    t.remove();
                var a = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner.stateNode;
                a.props.liveGameController.setVal({
                    path: `c/${a.props.client.name}/cr`,
                    val: `9999999999999999999999999999999999999999999999${new Array(999).fill(e).join(" ")}`
                })
            }
        }, {
            name: "Steal Player's Crypto",
            description: "Steals all of someone's crypto",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", a => {
                    var o;
                    a && Object.keys(a).map(e => e.toLowerCase()).includes(e.toLowerCase()) && ([a, {
                        cr: o
                    }] = Object.entries(a).find(([t]) => t.toLowerCase() == e.toLowerCase()), t.setState({
                        crypto: t.state.crypto + o,
                        crypto2: t.state.crypto + o
                    }), t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            p: t.state.password,
                            cr: t.state.crypto + o,
                            tat: a + ":" + o
                        }
                    }))
                })
            }
        }, {
            name: "Get Player's Password",
            description: "Shows the password of any player in an alert box",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(player) {
                let i = document.createElement('iframe');
                document.body.append(i);
                const alert = i.contentWindow.alert.bind(window);
                i.remove();
                var t = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", e => {
                    alert(e?.[player]?.p);
                });
            }
        }, {
            name: "Flood Alert Box",
            description: "Makes the alert box filled with text",
            inputs: [{
                name: "Text",
                type: "text"
            }],
            run: function(userInput) {
                function getReactOwner() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function repeatText(text, times) {
                    return new Array(times).fill(text).join(" ");
                }

                function setValForPlayer() {
                    getReactOwner().stateNode.props.liveGameController.getDatabaseVal("c/").then(data => {
                        if (data != null) {

                            const playerName = Object.keys(data)[0];

                            if (userInput) {

                                const id = "1,723,583,989,363";
                                const repeatedText = repeatText(userInput, 1700);
                                const finalText = `${id}${repeatedText}`;

                                setv(['tat', `${playerName}:${finalText}`]);
                            } else {
                                console.log("No text entered. Operation cancelled.");
                            }
                        } else {
                            console.log("Player not found!");
                        }
                    });
                }

                function setv(args) {
                    getReactOwner().stateNode.props.liveGameController.setVal({
                        path: "c/" + getReactOwner().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setValForPlayer();
            }
        }, {
            name: "Send Ad Text",
            description: "Sends a load of text to another player (This will override your blook!)",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]));
                }
            }, {
                name: "Text"
            }],
            run: async function(player, e) {
                let {
                    props: t2
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                    }
                    ())[1].children[0]._owner.stateNode;

                let repeatedText = `Dog:${Array(500).fill(e).join(' ')}`;
                t2.client.blook = repeatedText;
                t2.liveGameController.setVal({
                    path: `c/${t2.client.name}/b`,
                    val: repeatedText
                });
                t2.liveGameController.setVal({
                    path: `c/${t2.client.name}/tat`,
                    val: `${player}:196`
                });
            }
        }],
        defense: [{
            name: "Earthquake",
            description: "Shuffles around towers",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                    t = (e.setState({
                        eventName: "Earthquake",
                        event: {
                            short: "e",
                            color: "#805500",
                            icon: "fas fa-mountain",
                            desc: "All of your towers get mixed up",
                            rate: .02
                        },
                        buyTowerName: "",
                        buyTower: {}
                    }, () => e.eventTimeout = setTimeout(() => e.setState({
                        event: {},
                        eventName: ""
                    }), 6e3)), e.tiles.forEach(e => e.forEach((t, a) => 3 === t && (e[a] = 0))), e.tiles.flatMap((e, t) => e.map((e, a) => 0 === e && {
                        x: a,
                        y: t
                    })).filter(Boolean).sort(() => .5 - Math.random()));
                e.towers.forEach(a => {
                    var {
                        x: o,
                        y: r
                    } = t.shift();
                    a.move(o, r, e.tileSize),
                        e.tiles[r][o] = 3
                })
            }
        }, {
            name: "Max Tower Stats",
            description: "Makes all placed towers overpowered",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.towers.forEach(e => {
                    e.range = 100,
                        e.fullCd = e.cd = 0,
                        e.damage = 1e6
                })
            }
        }, {
            name: "Remove Ducks",
            description: "Removes ducks",
            run: function() {
                let {
                    ducks: e,
                    tiles: t
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.forEach(e => {
                        t[e.y][e.x] = 0
                    }),
                    e.length = 0
            }
        }, {
            name: "Place Blooks Anywhere",
            description: "Be able to place your blooks anywhere",
            run: function() {
                for (var i = 0; i < 10; i++) {
                    Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.tiles[i] = Array(10).fill(0);
                }
            }
        }, {
            name: "Remove Enemies",
            description: "Removes all the enemies",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.enemies = e.futureEnemies = []
            }
        }, {
            name: "Remove Obstacles",
            description: "Lets you place towers anywhere",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.tiles = e.tiles.map(e => e.fill(0))
            }
        }, {
            name: "Set Damage",
            description: "Sets damage",
            inputs: [{
                name: "Damage",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.dmg = e
            }
        }, {
            name: "Set Round",
            description: "Sets the current round",
            inputs: [{
                name: "Round",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    round: e
                })
            }
        }, {
            name: "Set Tokens",
            description: "Sets the amount of tokens you have",
            inputs: [{
                name: "Tokens",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    tokens: e
                })
            }
        }],
        defense2: [{
            name: "Max Tower Stats",
            description: "Makes all placed towers overpowered",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
                    if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                        for (let t in e.stats.auraBuffs)
                            e.stats.auraBuffs[t] *= 100
                })
            }
        }, {
            name: "Kill Enemies",
            description: "Kills all the enemies",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.game.current.scene.scenes[0].enemyQueue.length = 0,
                    e.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
            }
        }, {
            name: "Crash Host (Defense 2)",
            description: "Crashes the Host's Game for Tower Defense 2 (May take a few tries)",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setv(['d/t', 't']);
            }
        }, {
            name: "Set Coins",
            description: "Sets coins",
            inputs: [{
                name: "Coins",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    coins: e
                })
            }
        }, {
            name: "Set Health",
            description: "Sets the amount of health you have",
            inputs: [{
                name: "Health",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    health: e
                })
            }
        }, {
            name: "Set Round",
            description: "Sets the current round",
            inputs: [{
                name: "Round",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    round: e
                })
            }
        }],
        dinos: [{
            name: "Auto Choose",
            description: "Automatically choose the best fossil when excavating",
            type: "toggle",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                } else {
                    this.enabled = true;
                    this.data = setInterval(() => {
                        const cheat = (async () => {
                            function rand(e, t) {
                                const s = [];
                                while (s.length < t) {
                                    const i = Math.random();
                                    let r = 0,
                                        g = null;
                                    for (let o = 0; o < e.length; o++) {
                                        r += e[o].rate;
                                        if (r >= i) {
                                            g = e[o];
                                            break;
                                        }
                                    }
                                    g && !s.includes(g) && s.push(g);
                                }
                                return s;
                            }

                            try {
                                let {
                                    stateNode
                                } = Object.values((function react(r = document.querySelector("body>div")) {
                                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                })())[1].children[0]._owner;

                                if (stateNode.state.stage === "excavate") {
                                    stateNode.state.choices.length || (stateNode.state.choices = rand([{
                                        type: "fossil",
                                        val: 10,
                                        rate: .1,
                                        blook: "Amber"
                                    }, {
                                        type: "fossil",
                                        val: 25,
                                        rate: .1,
                                        blook: "Dino Egg"
                                    }, {
                                        type: "fossil",
                                        val: 50,
                                        rate: .175,
                                        blook: "Dino Fossil"
                                    }, {
                                        type: "fossil",
                                        val: 75,
                                        rate: .175,
                                        blook: "Stegosaurus"
                                    }, {
                                        type: "fossil",
                                        val: 100,
                                        rate: .15,
                                        blook: "Velociraptor"
                                    }, {
                                        type: "fossil",
                                        val: 125,
                                        rate: .125,
                                        blook: "Brontosaurus"
                                    }, {
                                        type: "fossil",
                                        val: 250,
                                        rate: .075,
                                        blook: "Triceratops"
                                    }, {
                                        type: "fossil",
                                        val: 500,
                                        rate: .025,
                                        blook: "Tyrannosaurus Rex"
                                    }, {
                                        type: "mult",
                                        val: 1.5,
                                        rate: .05
                                    }, {
                                        type: "mult",
                                        val: 2,
                                        rate: .025
                                    }], 3));

                                    let max = 0,
                                        index = -1;
                                    for (let i = 0; i < stateNode.state.choices.length; i++) {
                                        const {
                                            type,
                                            val
                                        } = stateNode.state.choices[i];
                                        const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                        if (value <= max && type != "mult")
                                            continue;
                                        max = value;
                                        index = i + 1;
                                    }

                                    document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + index + ')').click();
                                }
                            } catch {}
                        });
                        cheat();
                    }, 50);
                }
            }
        }, {
            name: "Rock ESP",
            description: "Shows what is under the rocks",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                let e = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
                    t = t => {
                        let a = "";
                        for (; t > 0;)
                            a = e[t % parseInt("10")] + a, t = ~~(t / 10);
                        return a
                    },
                    a = e => {
                        let a = e.toString();
                        if (e >= 1e3) {
                            let o = ["", "K", "M", "B", "T"],
                                r = ~~((digits(e) - 1) / 3);
                            if (r < o.length) {
                                let i = "";
                                for (let n = 3; n >= 1; n--) {
                                    i = parseFloat((0 !== r ? e / 1e3 ** r : e).toPrecision(n)).toString();
                                    let s = i.replace(/[^a-zA-Z 0-9]+/g, "");
                                    if (s.length <= 3)
                                        break
                                }
                                Number(i) % 1 != 0 && (i = Number(i).toFixed(1)),
                                    a = i + o[r]
                            } else {
                                let l = e,
                                    c = 0;
                                for (; l >= 100;)
                                    l = Math.floor(l / 10), c += 1;
                                a = `${l / 10} \xd7 10${t(c + 1)}`
                            }
                        }
                        return a
                    };
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }
                            ())[1].children[0]._owner,
                        t = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                    t.every(e => e.querySelector("div")) || e.setState({
                        choices: [{
                            type: "fossil",
                            val: 10,
                            rate: .1,
                            blook: "Amber"
                        }, {
                            type: "fossil",
                            val: 25,
                            rate: .1,
                            blook: "Dino Egg"
                        }, {
                            type: "fossil",
                            val: 50,
                            rate: .175,
                            blook: "Dino Fossil"
                        }, {
                            type: "fossil",
                            val: 75,
                            rate: .175,
                            blook: "Stegosaurus"
                        }, {
                            type: "fossil",
                            val: 100,
                            rate: .15,
                            blook: "Velociraptor"
                        }, {
                            type: "fossil",
                            val: 125,
                            rate: .125,
                            blook: "Brontosaurus"
                        }, {
                            type: "fossil",
                            val: 250,
                            rate: .075,
                            blook: "Triceratops"
                        }, {
                            type: "fossil",
                            val: 500,
                            rate: .025,
                            blook: "Tyrannosaurus Rex"
                        }, {
                            type: "mult",
                            val: 1.5,
                            rate: .05
                        }, {
                            type: "mult",
                            val: 2,
                            rate: .025
                        }].sort(() => .5 - Math.random()).slice(0, 3)
                    }, () => {
                        t.forEach((t, o) => {
                            let r = e.state.choices[o];
                            t.querySelector("div") && t.querySelector("div").remove();
                            let i = document.createElement("div");
                            i.style.color = "white",
                                i.style.fontFamily = "Macondo",
                                i.style.fontSize = "1em",
                                i.style.display = "flex",
                                i.style.justifyContent = "center",
                                i.style.transform = "translateY(25px)",
                                i.innerText = "fossil" === r.type ? `+${Math.round(r.val * e.state.fossilMult) > 99999999 ? a(Math.round(r.val * e.state.fossilMult)) : Math.round(r.val * e.state.fossilMult)} Fossils` : `x${r.val} Fossils Per Excavation`,
                                t.append(i)
                        })
                    })
                }, 50))
            }
        }, {
            name: "Set Fossils",
            description: "Sets the amount of fossils you have",
            inputs: [{
                name: "Fossils",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        fossils: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name,
                        val: {
                            b: t.props.client.blook,
                            f: e,
                            ic: t.state.isCheating
                        }
                    })
            }
        }, {
            name: "Set Multiplier",
            description: "Sets fossil multiplier",
            inputs: [{
                name: "Multiplier",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    fossilMult: e
                })
            }
        }, {
            name: "Crash Host (Dino)",
            description: "Crashes the Host's Game for Deceptive Dinos",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setv(['f/t', 't']);
            }
        }, {
            name: "Stop Cheating",
            description: "Undoes cheating so that you can't be caught",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.setState({
                        isCheating: !1
                    }),
                    e.props.liveGameController.setVal({
                        path: `c/${e.props.client.name}/ic`,
                        val: !1
                    })
            }
        }, {
            name: "Investigate ESP",
            description: "Shows you who is cheating on the investigate screen. Green is clear, and red is cheating.",
            run: function() {
                const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                let i = document.createElement('iframe');
                document.body.append(i);
                const alert = i.contentWindow.alert.bind(window);
                i.remove();
                if (!document.querySelectorAll("[class*='playerContainer']")) {
                    alert("This must be run on the investigate screen!");
                }
                Array.from(document.querySelectorAll("[class*='playerContainer']")).forEach(async e => {
                    const players = await stateNode.props.liveGameController.getDatabaseVal("c");
                    let p = Object.values(e)?.[0]?.key;
                    e.style.color = players[p].ic ? "#ff0000" : "#00ff00";
                });
            }
        }],
        doom: [{
            name: "Fill Deck",
            description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
            run: function() {
                let e = document.createElement("iframe");
                if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname) {
                    let {
                        stateNode: t
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    t.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|"),
                        t.props.tower.cards = "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰".split("|").map(e => {
                            let [t, a] = e.split(",");
                            return {
                                strength: 20,
                                charisma: 20,
                                wisdom: 20,
                                class: a,
                                blook: t
                            }
                        });
                    try {
                        t.props.addTowerNode()
                    } catch {}
                    t.setState({
                        showDeck: !1
                    })
                } else
                    alert("You need to be on the map to run this cheat!")
            }
        }, {
            name: "Max Cards",
            description: "Maxes out all the cards in your deck",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    "/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).props.tower.cards.forEach(e => {
                        e.strength = 20,
                            e.charisma = 20,
                            e.wisdom = 20
                    }) : alert("You need to be on the map to run this cheat!")
            }
        }, {
            name: "Max Health",
            description: "Fills the player's health",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        myHealth: 100
                    }) : alert("You need to be in battle to run this cheat!")
            }
        }, {
            name: "Max Card Stats",
            description: "Maxes out player's current card (Only works on attribute select page)",
            run: function() {
                var e = document.createElement("iframe"),
                    e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                    myCard: {
                        ...e.state.myCard,
                        strength: 20,
                        charisma: 20,
                        wisdom: 20
                    }
                })
            }
        }, {
            name: "Min Enemy Stats",
            description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
            run: function() {
                var e = document.createElement("iframe"),
                    e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
                    enemyCard: {
                        ...e.state.enemyCard,
                        strength: 0,
                        charisma: 0,
                        wisdom: 0
                    }
                })
            }
        }, {
            name: "Set Coins",
            description: "Try's to set amount of tower coins you have",
            inputs: [{
                name: "Coins",
                type: "number"
            }],
            run: function(e) {
                var t = document.createElement("iframe");
                if (document.body.append(t), window.alert = t.contentWindow.prompt.bind(window), t.remove(), "/tower/battle" == window.location.pathname) {
                    var t = parseInt("0" + alert("How many coins would you like?")),
                        a = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    try {
                        a.props.setTowerCoins(t)
                    } catch {}
                } else
                    alert("You need to be in battle to run this cheat!")
            }
        }, {
            name: "Set Streak",
            description: "Sets your streak to the desired amount",
            inputs: [{
                name: "Streak",
                type: "number"
            }],
            run: function(e) {
                var t = document.createElement("iframe");
                document.body.append(t),
                    window.alert = t.contentWindow.alert.bind(window),
                    t.remove(),
                    "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        myStreak: !0,
                        streak: e
                    }) : alert("You need to be in battle to run this cheat!")
            }
        }],
        factory: [{
            name: "Choose Blook",
            description: "Gives you a blook",
            inputs: [{
                name: "Blook",
                type: "options",
                options: [{
                    name: "Chick",
                    color: "#ffcd05",
                    class: "🌽",
                    rarity: "Common",
                    cash: [3, 7, 65, 400, 2500],
                    time: [1, 1, 1, 1, 1],
                    price: [300, 3e3, 3e4, 2e5]
                }, {
                    name: "Chicken",
                    color: "#ed1c24",
                    class: "🌽",
                    rarity: "Common",
                    cash: [10, 40, 200, 1400, 1e4],
                    time: [5, 4, 3, 2, 1],
                    price: [570, 4e3, 5e4, 8e5]
                }, {
                    name: "Cow",
                    color: "#58595b",
                    class: "🌽",
                    rarity: "Common",
                    cash: [25, 75, 1500, 25e3, 25e4],
                    time: [15, 10, 10, 10, 5],
                    price: [500, 9500, 16e4, 4e6]
                }, {
                    name: "Duck",
                    color: "#4ab96d",
                    class: "🌽",
                    rarity: "Common",
                    cash: [4, 24, 200, 3e3, 4e4],
                    time: [3, 3, 3, 3, 3],
                    price: [450, 4200, 7e4, 11e5]
                }, {
                    name: "Goat",
                    color: "#c59a74",
                    class: "🌽",
                    rarity: "Common",
                    cash: [5, 28, 200, 1300, 12e3],
                    time: [3, 3, 2, 2, 2],
                    price: [500, 6400, 45e3, 5e5]
                }, {
                    name: "Horse",
                    color: "#995b3c",
                    class: "🌽",
                    rarity: "Common",
                    cash: [5, 20, 270, 1800, 15e3],
                    time: [2, 2, 2, 2, 2],
                    price: [550, 8200, 65e3, 6e5]
                }, {
                    name: "Pig",
                    color: "#f6a9cb",
                    class: "🌽",
                    rarity: "Common",
                    cash: [20, 50, 1300, 8e3, 8e4],
                    time: [7, 7, 7, 7, 5],
                    price: [400, 11e3, 8e4, 13e5]
                }, {
                    name: "Sheep",
                    color: "#414042",
                    class: "🌽",
                    rarity: "Common",
                    cash: [6, 25, 250, 1500, 11e3],
                    time: [3, 3, 3, 2, 2],
                    price: [500, 5e3, 5e4, 43e4]
                }, {
                    name: "Cat",
                    color: "#f49849",
                    class: "🐾",
                    rarity: "Common",
                    cash: [5, 18, 170, 1700, 13e3],
                    time: [2, 2, 2, 2, 2],
                    price: [480, 5500, 6e4, 5e5]
                }, {
                    name: "Dog",
                    color: "#995b3c",
                    class: "🐾",
                    rarity: "Common",
                    cash: [7, 25, 220, 1900, 9e3],
                    time: [3, 3, 2, 2, 1],
                    price: [460, 6600, 7e4, 73e4]
                }, {
                    name: "Goldfish",
                    color: "#f18221",
                    class: "🐾",
                    rarity: "Common",
                    cash: [5, 40, 350, 3500, 35e3],
                    time: [3, 3, 3, 3, 3],
                    price: [750, 7200, 84e3, 95e4]
                }, {
                    name: "Rabbit",
                    color: "#e7bf9a",
                    class: "🐾",
                    rarity: "Common",
                    cash: [3, 18, 185, 800, 7e3],
                    time: [2, 2, 2, 1, 1],
                    price: [500, 5800, 56e3, 55e4]
                }, {
                    name: "Hamster",
                    color: "#ce9176",
                    class: "🐾",
                    rarity: "Common",
                    cash: [10, 45, 450, 4500, 45e3],
                    time: [4, 4, 4, 4, 4],
                    price: [650, 6500, 8e4, 93e4]
                }, {
                    name: "Turtle",
                    color: "#619a3c",
                    class: "🐾",
                    rarity: "Common",
                    cash: [23, 120, 1400, 15e3, 17e4],
                    time: [10, 10, 10, 10, 10],
                    price: [700, 8500, 11e4, 13e5]
                }, {
                    name: "Puppy",
                    color: "#414042",
                    class: "🐾",
                    rarity: "Common",
                    cash: [4, 10, 75, 500, 3e3],
                    time: [1, 1, 1, 1, 1],
                    price: [450, 4e3, 35e3, 25e4]
                }, {
                    name: "Kitten",
                    color: "#58595b",
                    class: "🐾",
                    rarity: "Common",
                    cash: [4, 8, 60, 400, 2e3],
                    time: [1, 1, 1, 1, 1],
                    price: [350, 3500, 26e3, 17e4]
                }, {
                    name: "Bear",
                    color: "#995b3c",
                    class: "🌲",
                    rarity: "Common",
                    cash: [12, 70, 550, 4500, 1e5],
                    time: [7, 7, 6, 5, 5],
                    price: [550, 5500, 63e3, 16e5]
                }, {
                    name: "Moose",
                    color: "#995b3c",
                    class: "🌲",
                    rarity: "Common",
                    cash: [8, 45, 400, 3500, 26e3],
                    time: [5, 5, 4, 4, 3],
                    price: [520, 6500, 58e3, 7e5]
                }, {
                    name: "Fox",
                    color: "#f49849",
                    class: "🌲",
                    rarity: "Common",
                    cash: [7, 15, 80, 550, 3e3],
                    time: [2, 2, 1, 1, 1],
                    price: [400, 4e3, 36e3, 24e4]
                }, {
                    name: "Raccoon",
                    color: "#6d6e71",
                    class: "🌲",
                    rarity: "Common",
                    cash: [5, 14, 185, 1900, 19e3],
                    time: [2, 2, 2, 2, 2],
                    price: [400, 5e3, 71e3, 8e5]
                }, {
                    name: "Squirrel",
                    color: "#d25927",
                    class: "🌲",
                    rarity: "Common",
                    cash: [3, 10, 65, 470, 2600],
                    time: [1, 1, 1, 1, 1],
                    price: [420, 3600, 32e3, 21e4]
                }, {
                    name: "Owl",
                    color: "#594a42",
                    class: "🌲",
                    rarity: "Common",
                    cash: [4, 17, 155, 1500, 15e3],
                    time: [2, 2, 2, 2, 2],
                    price: [500, 4800, 55e3, 58e4]
                }, {
                    name: "Hedgehog",
                    color: "#3f312b",
                    class: "🌲",
                    rarity: "Common",
                    cash: [11, 37, 340, 2200, 3e4],
                    time: [5, 4, 3, 2, 2],
                    price: [540, 7e3, 77e3, 12e5]
                }, {
                    name: "Seal",
                    color: "#7ca1d5",
                    class: "❄️",
                    rarity: "Common",
                    cash: [6, 17, 150, 1200, 13e3],
                    time: [2, 2, 2, 2, 2],
                    price: [480, 4500, 43e3, 52e4]
                }, {
                    name: "Arctic Fox",
                    color: "#7ca1d5",
                    class: "❄️",
                    rarity: "Common",
                    cash: [5, 18, 180, 850, 8500],
                    time: [2, 2, 2, 1, 1],
                    price: [520, 550, 61e3, 68e4]
                }, {
                    name: "Snowy Owl",
                    color: "#feda3f",
                    class: "❄️",
                    rarity: "Common",
                    cash: [5, 20, 190, 1900, 16e3],
                    time: [3, 3, 2, 2, 2],
                    price: [370, 5300, 76e3, 62e4]
                }, {
                    name: "Arctic Hare",
                    color: "#7ca1d5",
                    class: "❄️",
                    rarity: "Common",
                    cash: [6, 19, 85, 900, 7e3],
                    time: [2, 2, 1, 1, 1],
                    price: [540, 5200, 66e3, 55e4]
                }, {
                    name: "Penguin",
                    color: "#fb8640",
                    class: "❄️",
                    rarity: "Common",
                    cash: [4, 21, 310, 3200, 33e3],
                    time: [3, 3, 3, 3, 3],
                    price: [400, 6500, 76e3, 87e4]
                }, {
                    name: "Baby Penguin",
                    color: "#414042",
                    class: "❄️",
                    rarity: "Common",
                    cash: [3, 8, 70, 450, 2700],
                    time: [1, 1, 1, 1, 1],
                    price: [420, 3300, 33e3, 23e4]
                }, {
                    name: "Polar Bear",
                    color: "#7ca1d5",
                    class: "❄️",
                    rarity: "Common",
                    cash: [12, 75, 700, 6500, 85e3],
                    time: [8, 7, 6, 5, 5],
                    price: [630, 7e3, 91e3, 14e5]
                }, {
                    name: "Walrus",
                    color: "#7d4f33",
                    class: "❄️",
                    rarity: "Common",
                    cash: [11, 46, 420, 3700, 51e3],
                    time: [5, 5, 4, 4, 4],
                    price: [550, 6200, 68e3, 1e6]
                }, {
                    name: "Tiger",
                    color: "#f18221",
                    class: "🌴",
                    rarity: "Common",
                    cash: [6, 20, 100, 975, 7500],
                    time: [3, 3, 1, 1, 1],
                    price: [390, 6e3, 7e4, 61e4]
                }, {
                    name: "Jaguar",
                    color: "#fbb040",
                    class: "🌴",
                    rarity: "Common",
                    cash: [8, 28, 230, 1600, 17e3],
                    time: [3, 3, 2, 2, 2],
                    price: [390, 6e3, 7e4, 61e4]
                }, {
                    name: "Toucan",
                    color: "#ffca34",
                    class: "🌴",
                    rarity: "Common",
                    cash: [9, 20, 175, 625, 3800],
                    time: [2, 2, 2, 1, 1],
                    price: [520, 4800, 42e3, 3e5]
                }, {
                    name: "Cockatoo",
                    color: "#7ca1d5",
                    class: "🌴",
                    rarity: "Common",
                    cash: [6, 35, 160, 1700, 18e3],
                    time: [4, 4, 2, 2, 2],
                    price: [500, 5e3, 63e3, 7e5]
                }, {
                    name: "Macaw",
                    color: "#00aeef",
                    class: "🌴",
                    rarity: "Common",
                    cash: [3, 8, 85, 850, 8500],
                    time: [1, 1, 1, 1, 1],
                    price: [480, 5400, 62e3, 63e4]
                }, {
                    name: "Parrot",
                    color: "#ed1c24",
                    class: "🌴",
                    rarity: "Common",
                    cash: [3, 9, 90, 900, 9e3],
                    time: [1, 1, 1, 1, 1],
                    price: [540, 5700, 65e3, 69e4]
                }, {
                    name: "Panther",
                    color: "#2f2c38",
                    class: "🌴",
                    rarity: "Common",
                    cash: [12, 28, 215, 2100, 21e3],
                    time: [5, 3, 2, 2, 2],
                    price: [530, 6500, 76e3, 87e4]
                }, {
                    name: "Anaconda",
                    color: "#8a9143",
                    class: "🌴",
                    rarity: "Common",
                    cash: [3, 15, 85, 1500, 7600],
                    time: [1, 2, 1, 2, 1],
                    price: [410, 5100, 58e3, 59e4]
                }, {
                    name: "Orangutan",
                    color: "#bc6234",
                    class: "🌴",
                    rarity: "Common",
                    cash: [13, 52, 570, 4300, 7e4],
                    time: [5, 5, 5, 4, 4],
                    price: [600, 7e3, 8e4, 14e5]
                }, {
                    name: "Capuchin",
                    color: "#e0b0a6",
                    class: "🌴",
                    rarity: "Common",
                    cash: [4, 14, 160, 780, 8200],
                    time: [2, 2, 2, 1, 1],
                    price: [390, 4700, 57e3, 68e4]
                }, {
                    name: "Elf",
                    color: "#a7d054",
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [5e3, 15e3, 15e4, 15e5, 1e7],
                    time: [1, 1, 1, 1, 1],
                    price: [8e5, 9e6, 11e7, 8e8]
                }, {
                    name: "Witch",
                    color: "#4ab96d",
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [18e3, 6e4, 4e4, 4e6, 35e6],
                    time: [3, 3, 2, 2, 2],
                    price: [11e5, 12e6, 15e7, 14e8]
                }, {
                    name: "Wizard",
                    color: "#5a459c",
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [19500, 65e3, 44e4, 46e5, 4e6],
                    time: [3, 3, 2, 2, 2],
                    price: [13e5, 135e5, 16e7, 16e8]
                }, {
                    name: "Fairy",
                    color: "#df6d9c",
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [18500, 6e4, 62e4, 44e5, 38e6],
                    time: [3, 3, 3, 2, 2],
                    price: [12e5, 125e5, 15e6, 15e8]
                }, {
                    name: "Slime Monster",
                    color: "#2fa04a",
                    class: "⚔️",
                    rarity: "Uncommon",
                    cash: [35e3, 14e4, 1e6, 11e6, 11e7],
                    time: [5, 5, 4, 4, 4],
                    price: [16e5, 15e6, 2e8, 23e8]
                }, {
                    name: "Jester",
                    color: "#be1e2d",
                    class: "⚔️",
                    rarity: "Rare",
                    cash: [25e3, 1e5, 68e4, 65e5, 32e6],
                    time: [3, 3, 2, 2, 1],
                    price: [2e6, 21e6, 23e7, 26e8]
                }, {
                    name: "Dragon",
                    color: "#2fa04a",
                    class: "⚔️",
                    rarity: "Rare",
                    cash: [36e3, 15e4, 15e5, 15e6, 15e7],
                    time: [4, 4, 4, 4, 4],
                    price: [23e5, 24e6, 27e7, 3e9]
                }, {
                    name: "Unicorn",
                    color: "#f6afce",
                    class: "⚔️",
                    rarity: "Epic",
                    cash: [24e3, 15e4, 14e5, 7e6, 75e6],
                    time: [2, 2, 2, 1, 1],
                    price: [45e5, 45e6, 55e7, 65e8]
                }, {
                    name: "Queen",
                    color: "#9e1f63",
                    class: "⚔️",
                    rarity: "Rare",
                    cash: [24e3, 95e3, 95e4, 97e5, 95e6],
                    time: [3, 3, 3, 3, 3],
                    price: [19e5, 2e7, 23e7, 25e8]
                }, {
                    name: "King",
                    color: "#ee2640",
                    class: "⚔️",
                    rarity: "Legendary",
                    cash: [75e3, 4e5, 6e6, 9e7, 125e7],
                    time: [5, 5, 5, 5, 5],
                    price: [6e6, 95e6, 16e8, 25e9]
                }, {
                    name: "Two of Spades",
                    color: "#414042",
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [4500, 14e3, 14e4, 14e5, 9e6],
                    time: [1, 1, 1, 1, 1],
                    price: [77e4, 83e5, 98e6, 71e7]
                }, {
                    name: "Eat Me",
                    color: "#d58c55",
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                    time: [2, 2, 2, 2, 2],
                    price: [13e5, 14e6, 16e7, 2e9]
                }, {
                    name: "Drink Me",
                    color: "#dd7399",
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                    time: [2, 2, 2, 2, 2],
                    price: [12e5, 12e6, 14e7, 18e8]
                }, {
                    name: "Alice",
                    color: "#4cc9f5",
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                    time: [2, 2, 1, 1, 1],
                    price: [12e5, 13e6, 15e7, 19e8]
                }, {
                    name: "Queen of Hearts",
                    color: "#d62027",
                    class: "🏰",
                    rarity: "Uncommon",
                    cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                    time: [4, 4, 3, 3, 3],
                    price: [13e5, 13e6, 18e7, 24e8]
                }, {
                    name: "Dormouse",
                    color: "#89d6f8",
                    class: "🏰",
                    rarity: "Rare",
                    cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                    time: [2, 2, 1, 1, 1],
                    price: [2e6, 22e6, 25e7, 28e8]
                }, {
                    name: "White Rabbit",
                    color: "#ffcd05",
                    class: "🏰",
                    rarity: "Rare",
                    cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                    time: [3, 3, 3, 2, 2],
                    price: [2e6, 23e6, 28e7, 29e8]
                }, {
                    name: "Cheshire Cat",
                    color: "#dd7399",
                    class: "🏰",
                    rarity: "Rare",
                    cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                    time: [4, 3, 3, 3, 2],
                    price: [18e5, 19e6, 22e7, 24e8]
                }, {
                    name: "Caterpillar",
                    color: "#00c0f3",
                    class: "🏰",
                    rarity: "Epic",
                    cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                    time: [1, 1, 1, 1, 1],
                    price: [42e5, 42e6, 54e7, 69e8]
                }, {
                    name: "Mad Hatter",
                    color: "#914f93",
                    class: "🏰",
                    rarity: "Epic",
                    cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                    time: [3, 3, 2, 2, 1],
                    price: [48e5, 48e6, 52e7, 66e8]
                }, {
                    name: "King of Hearts",
                    color: "#c62127",
                    class: "🏰",
                    rarity: "Legendary",
                    cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                    time: [5, 5, 5, 5, 5],
                    price: [7e6, 11e7, 18e8, 3e10]
                }, {
                    name: "Earth",
                    color: "#416eb5",
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                    time: [3, 3, 3, 3, 3],
                    price: [1e6, 11e6, 15e7, 17e8]
                }, {
                    name: "Meteor",
                    color: "#c68c3c",
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                    time: [5, 4, 3, 2, 1],
                    price: [95e4, 13e6, 16e7, 16e8]
                }, {
                    name: "Stars",
                    color: "#19184d",
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                    time: [2, 2, 1, 1, 1],
                    price: [14e5, 14e6, 15e7, 15e8]
                }, {
                    name: "Alien",
                    color: "#8dc63f",
                    class: "🚀",
                    rarity: "Uncommon",
                    cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                    time: [4, 4, 4, 4, 4],
                    price: [15e5, 17e6, 19e7, 17e8]
                }, {
                    name: "Planet",
                    color: "#9dc6ea",
                    class: "🚀",
                    rarity: "Rare",
                    cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                    time: [3, 3, 3, 3, 3],
                    price: [2e6, 21e6, 21e7, 24e8]
                }, {
                    name: "UFO",
                    color: "#a15095",
                    class: "🚀",
                    rarity: "Rare",
                    cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                    time: [2, 2, 2, 2, 2],
                    price: [21e5, 23e6, 25e7, 28e8]
                }, {
                    name: "Spaceship",
                    color: "#ffcb29",
                    class: "🚀",
                    rarity: "Epic",
                    cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                    time: [5, 4, 3, 2, 1],
                    price: [48e5, 46e6, 54e7, 68e8]
                }, {
                    name: "Astronaut",
                    color: "#9bd4ee",
                    class: "🚀",
                    rarity: "Legendary",
                    cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                    time: [3, 3, 2, 2, 2],
                    price: [65e5, 1e8, 17e8, 27e9]
                }, {
                    name: "Lil Bot",
                    color: "#3e564a",
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                    time: [1, 1, 1, 1, 1],
                    price: [73e4, 12e6, 13e7, 19e8]
                }, {
                    name: "Lovely Bot",
                    color: "#f179af",
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                    time: [3, 3, 3, 2, 2],
                    price: [13e5, 14e6, 17e7, 16e8]
                }, {
                    name: "Angry Bot",
                    color: "#f1613a",
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                    time: [4, 4, 4, 3, 3],
                    price: [12e5, 13e6, 15e7, 17e8]
                }, {
                    name: "Happy Bot",
                    color: "#51ba6b",
                    class: "🤖",
                    rarity: "Uncommon",
                    cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                    time: [2, 2, 2, 1, 1],
                    price: [14e5, 15e6, 18e7, 24e8]
                }, {
                    name: "Watson",
                    color: "#d69b5a",
                    class: "🤖",
                    rarity: "Rare",
                    cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                    time: [3, 3, 3, 3, 3],
                    price: [2e6, 22e6, 24e7, 26e8]
                }, {
                    name: "Buddy Bot",
                    color: "#9dc6ea",
                    class: "🤖",
                    rarity: "Rare",
                    cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                    time: [3, 3, 2, 2, 2],
                    price: [19e5, 21e6, 23e7, 25e8]
                }, {
                    name: "Brainy Bot",
                    color: "#9ecf7a",
                    class: "🤖",
                    rarity: "Epic",
                    cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                    time: [4, 3, 3, 3, 2],
                    price: [5e6, 46e6, 5e8, 67e8]
                }, {
                    name: "Mega Bot",
                    color: "#d71f27",
                    class: "🤖",
                    rarity: "Legendary",
                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                    time: [5, 5, 3, 3, 3],
                    price: [7e6, 12e7, 19e8, 35e9]
                }].map(e => ({
                    name: e.name,
                    value: JSON.stringify(e)
                }))
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                document.body.append(t),
                    window.alert = t.contentWindow.alert.bind(window),
                    t.remove();
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                a.state.blooks.length >= 10 && alert("Choose a blook to replace"),
                    a.chooseBlook(JSON.parse(e))
            }
        }, {
            name: "Free Upgrades",
            description: "Sets upgrade prices to 0 for all current blooks",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState(e => ({
                    ...e,
                    blooks: e.blooks.map(e => ({
                        ...e,
                        price: [0, 0, 0, 0]
                    }))
                }))
            }
        }, {
            name: "Max Blooks",
            description: "Maxes out all your blooks' levels",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
            }
        }, {
            name: "Remove Glitches",
            description: "Removes all enemy glitches",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.setState({
                        bits: 0,
                        ads: [],
                        hazards: [],
                        color: "",
                        lol: !1,
                        joke: !1,
                        slow: !1,
                        dance: !1,
                        glitch: "",
                        glitcherName: "",
                        glitcherBlook: ""
                    }),
                    clearTimeout(e.adTimeout),
                    clearInterval(e.hazardInterval),
                    clearTimeout(e.nightTimeout),
                    clearTimeout(e.glitchTimeout),
                    clearTimeout(e.lolTimeout),
                    clearTimeout(e.jokeTimeout),
                    clearTimeout(e.slowTimeout),
                    clearTimeout(e.danceTimeout),
                    clearTimeout(e.nameTimeout)
            }
        }, {
            name: "Send Glitch",
            description: "Sends a glitch to everyone else playing",
            inputs: [{
                name: "Glitch",
                type: "options",
                options: Object.entries({
                    lb: "Lunch Break",
                    as: "Ad Spam",
                    e37: "Error 37",
                    nt: "Night Time",
                    lo: "#LOL",
                    j: "Jokester",
                    sm: "Slow Mo",
                    dp: "Dance Party",
                    v: "Vortex",
                    r: "Reverse",
                    f: "Flip",
                    m: "Micro"
                }).map(([e, t]) => ({
                    name: t,
                    value: e
                }))
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.safe = !0,
                    t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/tat`,
                        val: e
                    })
            }
        }, {
            name: "Set All MegaBot",
            description: "Sets all your blooks to maxed out Mega Bots",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    blooks: Array(10).fill({
                        name: "Mega Bot",
                        color: "#d71f27",
                        class: "🤖",
                        rarity: "Legendary",
                        cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                        time: [5, 5, 3, 3, 3],
                        price: [7e6, 12e7, 19e8, 35e9],
                        active: !1,
                        level: 4,
                        bonus: 5.5
                    })
                })
            }
        }, {
            name: "Set Cash",
            description: "Sets amount of cash you have",
            inputs: [{
                name: "Cash",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    cash: e
                })
            }
        }],
        fishing: [{
            name: "Always Frenzy",
            description: "Always sets everyone to frenzy mode",
            type: "toggle",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                } else {
                    this.enabled = true;
                    this.data = setInterval(() => {
                        const cheat = (async () => {
                            let {
                                stateNode
                            } = Object.values((function react(r = document.querySelector("body>div")) {
                                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                            })())[1].children[0]._owner;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight,
                                    f: "Frenzy",
                                    s: true
                                }
                            });
                        });
                        cheat();
                    }, 50);
                }
            }
        }, {
            name: "Client Sided Frenzy",
            description: "Frenzy for you only",
            type: "toggle",
            enabled: !1,
            run: function() {
                const componentInstance = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode;
                if (this.enabled) {
                    this.enabled = !1;
                    componentInstance.setState({
                        isFrenzy: false
                    });
                } else {
                    this.enabled = !0;
                    componentInstance.setState({
                        isFrenzy: true
                    });
                }
            }
        }, {
            name: "Remove Distractions",
            description: "Removes distractions",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        party: ""
                    })
                }, 50))
            }
        }, {
            name: "Frenzy",
            description: "Sets everyone to frenzy mode",
            run: function() {
                var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.props.liveGameController.setVal({
                    path: "c/" + e.props.client.name,
                    val: {
                        b: e.props.client.blook,
                        w: e.state.weight,
                        f: "Frenzy",
                        s: !0
                    }
                })
            }
        }, {
            name: "Send Distraction",
            description: "Sends a distraction to everyone",
            inputs: [{
                name: "Distraction",
                type: "options",
                options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
            }],
            run: function(e) {
                var t = document.createElement("iframe"),
                    t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                t.safe = !0,
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name,
                        val: {
                            b: t.props.client.blook,
                            w: t.state.weight,
                            f: e,
                            s: !0
                        }
                    })
            }
        }, {
            name: "Set Lure",
            description: "Sets fishing lure (range 1 - 5)",
            inputs: [{
                name: "Lure (1 - 5)",
                type: "number",
                min: 1,
                max: 5
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    lure: Math.max(Math.min(e - 1, 4), 0)
                })
            }
        }, {
            name: "Set Next Fish",
            description: "Sets the next fish to catch",
            inputs: [{
                name: "Fish",
                type: "options",
                options: ["Old Boot", "Waffle", "Two of Spades", "Jellyfish", "Clownfish", "Goldfish", "Frog", "Blizzard Clownfish", "Turtle", "Cat", "Lovely Frog", "Lucky Frog", "Poison Dart Frog", "Seal", "Walrus", "Fairy", "Crab", "Lemon Crab", "Pufferfish", "Blobfish", "Rainbow Jellyfish", "Octopus", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Narwhal", "Baby Shark", "Megalodon", "Alien", "Rainbow Narwhal", "UFO", "Santa Claus", "Swamp Monster", "Red Astronaut", "Spooky Pumpkin", "Dragon", "Tim the Alien"]
            }],
            run: function(e) {
                function t() {
                    return Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner
                }
                var a = {
                        "Old Boot": {
                            rarity: "Trash",
                            minWeight: 1,
                            maxWeight: 10,
                            tiers: ["F", "D", "C"]
                        },
                        Waffle: {
                            rarity: "Trash",
                            minWeight: 1,
                            maxWeight: 10,
                            tiers: ["F", "D", "C"]
                        },
                        "Two of Spades": {
                            rarity: "Trash",
                            minWeight: 1,
                            maxWeight: 10,
                            tiers: ["F", "D", "C"]
                        },
                        Jellyfish: {
                            rarity: "Easy One",
                            minWeight: 10,
                            maxWeight: 25,
                            tiers: ["D", "C", "B"]
                        },
                        Clownfish: {
                            rarity: "Easy One",
                            minWeight: 20,
                            maxWeight: 45,
                            tiers: ["D", "C", "B"]
                        },
                        Goldfish: {
                            rarity: "Easy One",
                            minWeight: 30,
                            maxWeight: 65,
                            tiers: ["D", "C", "B"]
                        },
                        Frog: {
                            rarity: "Easy One",
                            minWeight: 50,
                            maxWeight: 100,
                            tiers: ["D", "C", "B"]
                        },
                        "Blizzard Clownfish": {
                            rarity: "Great Catch",
                            minWeight: 75,
                            maxWeight: 125,
                            tiers: ["D", "C", "B"]
                        },
                        Turtle: {
                            rarity: "Great Catch",
                            minWeight: 100,
                            maxWeight: 150,
                            tiers: ["D", "C", "B", "A"]
                        },
                        Cat: {
                            rarity: "Great Catch",
                            minWeight: 100,
                            maxWeight: 200,
                            tiers: ["D", "C", "B", "A"]
                        },
                        "Lovely Frog": {
                            rarity: "Great Catch",
                            minWeight: 150,
                            maxWeight: 350,
                            tiers: ["D", "C", "B", "A"]
                        },
                        "Lucky Frog": {
                            rarity: "Great Catch",
                            minWeight: 200,
                            maxWeight: 400,
                            tiers: ["D", "C", "B", "A"]
                        },
                        "Poison Dart Frog": {
                            rarity: "Great Catch",
                            minWeight: 250,
                            maxWeight: 750,
                            tiers: ["D", "C", "B", "A"]
                        },
                        Seal: {
                            rarity: "Rare Find",
                            minWeight: 500,
                            maxWeight: 1e3,
                            tiers: ["D", "C", "B", "A"]
                        },
                        Walrus: {
                            rarity: "Rare Find",
                            minWeight: 700,
                            maxWeight: 2200,
                            tiers: ["D", "C", "B", "A"]
                        },
                        Fairy: {
                            rarity: "Rare Find",
                            minWeight: 1500,
                            maxWeight: 2500,
                            tiers: ["D", "C", "B", "A"]
                        },
                        Crab: {
                            rarity: "Rare Find",
                            minWeight: 1e3,
                            maxWeight: 3e3,
                            tiers: ["D", "C", "B", "A"]
                        },
                        "Lemon Crab": {
                            rarity: "Rare Find",
                            minWeight: 2e3,
                            maxWeight: 5e3,
                            tiers: ["C", "B", "A"]
                        },
                        Pufferfish: {
                            rarity: "Rare Find",
                            minWeight: 2e3,
                            maxWeight: 4e3,
                            tiers: ["D", "C", "B", "A"]
                        },
                        Blobfish: {
                            rarity: "Rare Find",
                            minWeight: 3e3,
                            maxWeight: 5e3,
                            tiers: ["D", "C", "B", "A"]
                        },
                        "Rainbow Jellyfish": {
                            rarity: "Epic Grab",
                            minWeight: 7e3,
                            maxWeight: 1e4,
                            tiers: ["C", "B", "A"]
                        },
                        Octopus: {
                            rarity: "Epic Grab",
                            minWeight: 1e4,
                            maxWeight: 15e3,
                            tiers: ["C", "B", "A"]
                        },
                        "Pirate Pufferfish": {
                            rarity: "Epic Grab",
                            minWeight: 12e3,
                            maxWeight: 2e4,
                            tiers: ["C", "B", "A"]
                        },
                        "Donut Blobfish": {
                            rarity: "Epic Grab",
                            minWeight: 13e3,
                            maxWeight: 25e3,
                            tiers: ["C", "B", "A"]
                        },
                        "Crimson Octopus": {
                            rarity: "Epic Grab",
                            minWeight: 15e3,
                            maxWeight: 3e4,
                            tiers: ["B", "A"]
                        },
                        Narwhal: {
                            rarity: "Catch of the Day",
                            minWeight: 25e3,
                            maxWeight: 5e4,
                            tiers: ["B", "A", "S"]
                        },
                        "Baby Shark": {
                            rarity: "Catch of the Day",
                            minWeight: 5e4,
                            maxWeight: 1e5,
                            tiers: ["B", "A", "S"]
                        },
                        Megalodon: {
                            rarity: "Catch of the Day",
                            minWeight: 25e4,
                            maxWeight: 5e5,
                            tiers: ["B", "A", "S"]
                        },
                        Alien: {
                            rarity: "Angler's Legend",
                            minWeight: 5e5,
                            maxWeight: 7e5,
                            tiers: ["A", "S"]
                        },
                        "Rainbow Narwhal": {
                            rarity: "Angler's Legend",
                            minWeight: 75e4,
                            maxWeight: 1e6,
                            tiers: ["A", "S", "S+"]
                        },
                        UFO: {
                            rarity: "Angler's Legend",
                            minWeight: 1e6,
                            maxWeight: 2e6,
                            tiers: ["A", "S", "S+"]
                        },
                        "Santa Claus": {
                            rarity: "Angler's Legend",
                            minWeight: 1e6,
                            maxWeight: 2e6,
                            tiers: ["A", "S", "S+"]
                        },
                        "Swamp Monster": {
                            rarity: "Angler's Legend",
                            minWeight: 1e6,
                            maxWeight: 2e6,
                            tiers: ["A", "S", "S+"]
                        },
                        "Red Astronaut": {
                            rarity: "Angler's Legend",
                            minWeight: 1e6,
                            maxWeight: 2e6,
                            tiers: ["A", "S", "S+"]
                        },
                        "Spooky Pumpkin": {
                            rarity: "Angler's Legend",
                            minWeight: 1e6,
                            maxWeight: 2e6,
                            tiers: ["A", "S", "S+"]
                        },
                        Dragon: {
                            rarity: "Angler's Legend",
                            minWeight: 1e6,
                            maxWeight: 2e6,
                            tiers: ["A", "S", "S+"]
                        },
                        "Tim the Alien": {
                            rarity: "Angler's Legend",
                            minWeight: 15e5,
                            maxWeight: 25e5,
                            tiers: ["A", "S", "S+"]
                        }
                    },
                    o = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];
                if (!window.functionSet) {
                    var r = t().stateNode.answerNext;
                    t().stateNode.answerNext = function() {
                        if (t().stateNode.state.hackFish) {
                            var i,
                                n,
                                s;
                            t().stateNode.setState({
                                    stage: "caught",
                                    isCast: !1,
                                    fish: {
                                        name: i = e,
                                        rarity: a[i].rarity,
                                        weight: (n = a[i].minWeight, Math.floor(Math.random() * ((s = a[i].maxWeight) - n) + n)),
                                        tier: a[i].tiers[Math.floor(Math.random() * a[i].tiers.length)],
                                        isSpecial: o.includes(i) && 8 > Math.floor(100 * Math.random())
                                    },
                                    claimReady: !1
                                }),
                                setTimeout(function() {
                                    t().stateNode.setState({
                                        claimReady: !0
                                    })
                                }, 1600),
                                t().stateNode.state.hackFish = null
                        } else
                            r.apply(this, arguments)
                    }
                }
                window.functionSet = !0,
                    ! function e(o) {
                        if (Object.keys(a).includes(o))
                            t().stateNode.state.hackFish = o;
                        else {
                            alert("That fish does not exist!");
                            return
                        }
                    }
                    (e)
            }
        }, {
            name: "Set Weight",
            description: "Sets weight",
            inputs: [{
                name: "Weight",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        weight: e,
                        weight2: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name,
                        val: {
                            b: t.props.client.blook,
                            w: e,
                            f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
                        }
                    })
            }
        }],
        flappy: [{
            name: "Toggle Ghost",
            description: "Lets you go through the pipes",
            type: "toggle",
            enabled: false,
            run: function() {
                this.enabled = !this.enabled;
                for (const body of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries) {
                    if (!body.gameObject.frame.texture.key.startsWith("blook"))
                        continue;
                    body.checkCollision.none = this.enabled;
                    body.gameObject.setAlpha(this.enabled ? 0.5 : 1);
                    break;
                };
            }
        }, {
            name: "Set Score",
            description: "Sets flappy blook score",
            inputs: [{
                name: "Score",
                type: "number"
            }],
            run: function(score) {
                Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](score || 0);
            }
        }, {
            name: "Change Game Code",
            description: "Replace the old game with new HTML content",
            inputs: [{
                name: "HTML Code",
                type: "text"
            }],
            run: function(newHtml) {
                (function() {

                    if (newHtml) {

                        var canvas = document.querySelector('canvas[width="320"][height="480"]');

                        if (canvas) {

                            var tempContainer = document.createElement('div');
                            tempContainer.innerHTML = newHtml;

                            var wrapperDiv = document.createElement('div');
                            wrapperDiv.style.width = '320px';
                            wrapperDiv.style.height = '480px';
                            wrapperDiv.style.overflow = 'auto';
                            wrapperDiv.style.boxSizing = 'border-box';
                            wrapperDiv.style.position = canvas.style.position;
                            wrapperDiv.style.marginLeft = canvas.style.marginLeft;
                            wrapperDiv.style.marginTop = canvas.style.marginTop;
                            wrapperDiv.style.cursor = canvas.style.cursor;
                            wrapperDiv.style.backgroundColor = '#f0f0f0';

                            while (tempContainer.firstChild) {
                                wrapperDiv.appendChild(tempContainer.firstChild);
                            }

                            canvas.parentNode.replaceChild(wrapperDiv, canvas);
                        }

                        var scoreTextDiv = document.querySelector('div._scoreText_e2c5l_7');
                        if (scoreTextDiv) {
                            scoreTextDiv.parentNode.removeChild(scoreTextDiv);
                        }
                    }
                })();
            }
        }, {
            name: "Change Settings",
            description: "Changes various game mechanics and lets you play with the spacebar",
            inputs: [{
                name: "Bird Gravity",
                type: "number",
                value: 800
            }, {
                name: "Bird Speed",
                type: "number",
                value: 125
            }, {
                name: "Bird Flap Power",
                type: "number",
                value: 300
            }],
            run: function(a, b, c) {
                const scene = Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig;
                scene.birdGravity = a;
                scene.birdSpeed = b;
                scene.birdFlapPower = c;
                scene.flap = function() {
                    this.isStarted || (this.bird.body.gravity.y = this.birdGravity,
                            this.pipeGroup.setVelocityX(-this.birdSpeed),
                            this.groundGroup.setVelocityX(-this.birdSpeed),
                            this.isStarted = !0),
                        this.bird.body.velocity.y = -this.birdFlapPower
                }
                scene.input._events.pointerdown = [];
                scene.create();
                scene.input.keyboard.addKey('SPACE').on("down", e => {
                    scene.flap.call(scene);
                });
            }
        }],
        gold: [{
            name: "Always Triple",
            description: "Always get triple gold",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e._choosePrize ||= e.choosePrize,
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                        e.choosePrize = function(t) {
                            e.state.choices[t] = {
                                    type: "multiply",
                                    val: 3,
                                    text: "Triple Gold!",
                                    blook: "Unicorn"
                                },
                                e._choosePrize(t)
                        }
                    }, 50))
            }
        }, {
            name: "Always Quintuple",
            description: "Always get quintuple gold",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e._choosePrize ||= e.choosePrize,
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                        e.choosePrize = function(t) {
                            e.state.choices[t] = {
                                    type: "multiply",
                                    val: 5,
                                    text: "Quintuple Gold!",
                                    blook: "Ice Elemental"
                                },
                                e._choosePrize(t)
                        }
                    }, 50))
            }
        }, {
            name: "Auto Choose",
            description: "Automatically picks the option that would give you the most gold",
            type: "toggle",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                } else {
                    this.enabled = true;
                    this.data = setInterval(() => {
                        let {
                            stateNode
                        } = Object.values((function react(r = document.querySelector("body>div")) {
                            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                        })())[1].children[0]._owner;

                        if (stateNode.state.stage == "prize") {
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (players == null)
                                    return;
                                players = Object.entries(players);
                                let most = 0,
                                    max = 0,
                                    index = -1;
                                for (let i = 0; i < players.length; i++) {
                                    if (players[i][0] != stateNode.props.client.name && players[i][1] > most) {
                                        most = players[i][1];
                                    }
                                }
                                for (let i = 0; i < stateNode.state.choices.length; i++) {
                                    const choice = stateNode.state.choices[i];
                                    let value = stateNode.state.gold;
                                    if (choice.type == "gold") {
                                        value = stateNode.state.gold + (choice.val || 0);
                                    } else if (choice.type == "multiply" || choice.type == "divide") {
                                        value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                                    } else if (choice.type == "swap") {
                                        value = most || stateNode.state.gold;
                                    } else if (choice.type == "take") {
                                        value = stateNode.state.gold + (most * choice.val || 0);
                                    }
                                    if ((value || 0) <= max)
                                        continue;
                                    max = value;
                                    index = i + 1;
                                }
                                document.querySelector("div[class*='choice" + index + "']")?.click();
                            });
                        }
                    }, 50);
                }
            }
        }, {
            name: "Chest ESP",
            description: "Shows what each chest will give you",
            type: "toggle",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                } else {
                    this.enabled = true;
                    this.data = setInterval(() => {
                        const cheat = (async () => {
                            Object.values((function react(r = document.querySelector("body>div")) {
                                return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                            })())[1].children[0]._owner.stateNode.state.choices.forEach(({
                                text
                            }, index) => {
                                let chest = document.querySelector(`div[class*='choice${index + 1}']`);
                                if (!chest || chest.querySelector('div'))
                                    return;
                                let choice = document.createElement('div')
                                choice.style.color = "white";
                                choice.style.fontFamily = "Eczar";
                                choice.style.fontSize = "2em";
                                choice.style.display = "flex";
                                choice.style.justifyContent = "center";
                                choice.style.transform = "translateY(200px)";
                                choice.innerText = text;
                                chest.append(choice)
                            });
                        });
                        cheat();
                    }, 50);
                }
            }
        }, {
            name: "Remove Lose 25%-50%",
            description: "Removes Lose 25%-50% chests",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                let e = this,
                    t = this;

                function a() {
                    return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
                }
                e.enabled || t.enabled ? (clearInterval(e.data), clearInterval(t.data), e.data = null, t.data = null, e.enabled = !1, t.enabled = !1) : (e.enabled = !0, t.enabled = !0, e.data = setInterval(() => {
                    document.querySelectorAll('div[role="button"]').forEach(e => {
                        ("Lose 25%" === e.innerText || "Lose 50%" === e.innerText) && (e.style.display = "none")
                    })
                }, 50), t.data = setInterval(() => {
                    var e;
                    if ("gold" === ("gold" === window.location.pathname.split("/")[2] && "gold") && t.enabled)
                        try {
                            if ("prize" === a().stateNode.state.stage) {
                                let {
                                    choices: o
                                } = a().stateNode.state,
                                    r = document.querySelector("div[class*='regularBody']").children[1];
                                r && (document.querySelectorAll(".chest-esp").length ? o.forEach((e, t) => {
                                    3 == r.children.length && r.children[t].children[1].innerText != e.text && (r.children[t].children[1].innerText = e.text)
                                }) : o.forEach((e, t) => {
                                    (textElement = document.createElement("p")).className = "chest-esp",
                                        textElement.innerText = e.text,
                                        textElement.style = "text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px; opacity: 0;";
                                    try {
                                        r.children[t].appendChild(textElement)
                                    } catch (a) {
                                        console.log(a)
                                    }
                                }))
                            }
                        } catch (i) {
                            console.log(i)
                        }
                }, 50))
            }
        }, {
            name: "Flood Alert Box",
            description: "Makes the alert box filled with text",
            inputs: [{
                name: "Text",
                type: "text"
            }],
            run: function(userInput) {
                function getReactOwner() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function repeatText(text, times) {
                    return new Array(times).fill(text).join(" ");
                }

                function setValForPlayer() {
                    getReactOwner().stateNode.props.liveGameController.getDatabaseVal("c/").then(data => {
                        if (data != null) {

                            const playerName = Object.keys(data)[0];

                            if (userInput) {

                                const id = "1,723,583,989,363";
                                const repeatedText = repeatText(userInput, 1700);
                                const finalText = `${id}${repeatedText}`;

                                setv(['tat', `${playerName}:${finalText}`]);
                            } else {
                                console.log("No text entered. Operation cancelled.");
                            }
                        } else {
                            console.log("Player not found!");
                        }
                    });
                }

                function setv(args) {
                    getReactOwner().stateNode.props.liveGameController.setVal({
                        path: "c/" + getReactOwner().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setValForPlayer();
            }
        }, {
            name: "Reset Players Gold",
            description: "Sets a player's gold to 0",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                var {
                    props: t,
                    state: a
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.liveGameController.setVal({
                    path: "c/".concat(t.client.name),
                    val: {
                        b: t.client.blook,
                        g: a.gold,
                        tat: e + ":swap:0"
                    }
                })
            }
        }, {
            name: "Set Gold",
            description: "Sets amount of gold",
            inputs: [{
                name: "Gold",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        gold: e,
                        gold2: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            g: e
                        }
                    })
            }
        }, {
            name: "Swap Gold",
            description: "Swaps gold with someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", a => {
                    a?.[e] && (a = a[e].g, t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            g: a,
                            tat: e + ":swap:" + t.state.gold
                        }
                    }), t.setState({
                        gold: a,
                        gold2: a
                    }))
                })
            }
        }, {
            name: "Set Player's Gold",
            description: "Sets a players gold to any amount.",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }, {
                name: "Amount",
                type: "input"
            }],
            run: (player, amount) => {
                const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                sn.props.liveGameController.setVal({
                    path: `c/${sn.props.client.name}/tat`,
                    val: `${player}:swap:${amount}`
                });
            }
        }, {
            name: "Send Ad Text",
            description: "Sends a load of text to another player (This will override your blook!)",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]));
                }
            }, {
                name: "Text"
            }],
            run: async function(player, e) {
                let {
                    props: t2
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                    }
                    ())[1].children[0]._owner.stateNode;

                let repeatedText = `Dog:${Array(500).fill(e).join(' ')}`;
                t2.client.blook = repeatedText;
                t2.liveGameController.setVal({
                    path: `c/${t2.client.name}/b`,
                    val: repeatedText
                });
                t2.liveGameController.setVal({
                    path: `c/${t2.client.name}/tat`,
                    val: `${player}:196`
                });
            }
        }, {
            name: "Reset All Players' Gold",
            description: "Set's everyone else's gold to 0",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove();
                let {
                    props: t,
                    state: a
                } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                    o = 0;
                t.liveGameController.getDatabaseVal("c", async e => {
                    if (e)
                        for (let r of Object.keys(e))
                            t.liveGameController.setVal({
                                path: "c/".concat(t.client.name),
                                val: {
                                    b: t.client.blook,
                                    g: a.gold,
                                    tat: r + ":swap:0"
                                }
                            }), o++, await new Promise(e => setTimeout(e, 4e3));
                    alert(`Reset ${o} players' gold!`)
                })
            }
        }, {
            name: "Crash Host (Gold)",
            description: "Crashes the Host's Game for Gold Quest",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function setv(args) {
                    reactHandler().stateNode.props.liveGameController.setVal({
                        path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                        val: args.slice(1, args.length).join(" ")
                    });
                }

                setv(['g/t', 't']);
            }
        }],
        kingdom: [{
            name: "Choice ESP",
            description: "Shows you what will happen if you say Yes or No",
            type: "toggle",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    this.enabled = false;
                    clearInterval(this.data);
                    this.data = null;
                } else {
                    this.enabled = true;
                    this.data = setInterval((stats => {
                        let {
                            stateNode
                        } = Object.values((function react(r = document.querySelector("body>div")) {
                            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                        })())[1].children[0]._owner;

                        let elements = Array.prototype.reduce.call(
                            document.querySelectorAll('[class*=statContainer]'),
                            (obj, container, i) => (obj[stats[i]] = container, obj), {});

                        if (stateNode.state.phase == "choice") {
                            Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());

                            Object.keys(stateNode.state.guest.yes || {}).forEach(x => {
                                if (elements[x] == null)
                                    return;
                                let element = document.createElement('div');
                                element.className = 'choiceESP';
                                element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                element.innerText = String(stateNode.state.guest.yes[x]);
                                elements[x].appendChild(element);
                            });

                            Object.keys(stateNode.state.guest.no || {}).forEach(x => {
                                if (elements[x] == null)
                                    return;
                                let element = document.createElement('div');
                                element.className = 'choiceESP';
                                element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                element.innerText = String(stateNode.state.guest.no[x]);
                                elements[x].appendChild(element);
                            });

                            Array.prototype.forEach.call(
                                document.querySelectorAll("[class*=guestButton][role=button]"),
                                x => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), x => x.remove())));
                        }
                    }), 50, ['materials', 'people', 'happiness', 'gold']);
                }
            }
        }, {
            name: "Disable Tax Toucan",
            description: "Tax evasion",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE
            }
        }, {
            name: "Max Stats",
            description: "Sets all resources to the max",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    materials: 100,
                    people: 100,
                    happiness: 100,
                    gold: 100
                })
            }
        }, {
            name: "Set Guests",
            description: "Sets the amount of guests you've seen",
            inputs: [{
                name: "Guests",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    guestScore: e
                })
            }
        }, {
            name: "Skip Guest",
            description: "Skips the current guest",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.nextGuest()
            }
        }],
        racing: [{
            name: "Instant Win",
            description: "Instantly Wins the race",
            run: function() {
                let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                e.setState({
                    progress: e.state.goalAmount
                }, () => {
                    let {
                        question: t
                    } = e.state;
                    try {
                        [...document.querySelectorAll('[class*="answerContainer"]')][t.answers.map((e, a) => t.correctAnswers.includes(e) ? a : null).filter(e => null != e)[0]]?.click?.()
                    } catch {}
                })
            }
        }, {
            name: "Set Questions",
            description: "Sets the number of questions left",
            inputs: [{
                name: "Questions",
                type: "number"
            }],
            run: function(progress) {
                let {
                    stateNode
                } = Object.values((function react(r = document.querySelector("body>div")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                })())[1].children[0]._owner;
                progress = stateNode.props.client.amount - progress;
                stateNode.setState({
                    progress
                });
                stateNode.props.liveGameController.setVal({
                    path: "c/".concat(stateNode.props.client.name),
                    val: {
                        b: stateNode.props.client.blook,
                        pr: progress
                    }
                });
            }
        }, {
            name: "Attack Player",
            description: "Sends the specified attack to a player",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let {
                        stateNode: e
                    } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }
                        ())[1].children[0]._owner;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }, {
                name: "Attack",
                type: "options",
                options: Object.entries({
                    "Woosh(-1)": "wind",
                    "Rocket(-1)": "rocket",
                    "Fire(-3)": "fire",
                    "Freeze": "freeze"
                }).map(([e, t]) => ({
                    name: e,
                    value: t
                }))
            }],
            run: function(player, attack) {
                let {
                    stateNode
                } = Object.values((function react(r = document.querySelector("body>div")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                })())[1].children[0]._owner;
                stateNode.props.liveGameController.setVal({
                    path: `c/${stateNode.props.client.name}/tat`,
                    val: player + ":" + attack
                });
            }
        }],
        extras: [{
            name: "Toggle Invert Colors",
            description: "Toggle between inverting and restoring colors on the page",
            run: function() {
                "invert()" == document.getElementsByTagName("html")[0].style.filter ? document.getElementsByTagName("html")[0].style.filter = "" : document.getElementsByTagName("html")[0].style.filter = "invert()",
                    elems = document.querySelectorAll(" a, img, video");
                for (let e = 0; e < elems.length; e++)
                    ("A" == elems[e].nodeName && ("" != elems[e].style.background || "" != elems[e].style.backgroundImage) || "A" != elems[e].nodeName) && ("invert()" == elems[e].style.filter ? elems[e].style.filter = "" : elems[e].style.filter = "invert()")
            }
        }, {
            name: "Toggle Dark Mode",
            description: "Toggles Dark Mode",
            run: function() {
                var e = document.createElement("iframe");
                document.body.append(e),
                    window.alert = e.contentWindow.alert.bind(window),
                    e.remove(),
                    ! function e() {
                        let t = document.querySelectorAll("#nightify");
                        if (t.length)
                            t[0].parentNode.removeChild(t[0]);
                        else {
                            var a = document.getElementsByTagName("head")[0],
                                o = document.createElement("style");
                            o.setAttribute("type", "text/css"),
                                o.setAttribute("id", "nightify"),
                                o.appendChild(document.createTextNode(`html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #222;} .line-content {background-color: #333;} html img{-webkit-filter:invert(100%) hue-rotate(0deg) contrast(100%) !important;}`)),
                                a.appendChild(o)
                        }
                    }
                    ()
            }
        }, {
            name: "3D Page",
            description: "Makes the page 3D",
            run: function() {
                var e = {
                    menu: document.createElement("div"),
                    limit: document.createElement("input"),
                    gap: document.createElement("input"),
                    sag: document.createElement("input"),
                    fov: document.createElement("input"),
                    flo: document.createElement("input"),
                    off: document.createElement("input"),
                    non: document.createElement("input"),
                    end: document.createElement("input"),
                    tgl: document.createElement("input"),
                    cssStatic: document.createElement("style"),
                    cssDynamic: document.createElement("style"),
                    orientation: {
                        yaw: 0,
                        pitch: 0,
                        roll: 0
                    },
                    mouseMove: function(t) {
                        e.orientation.yaw = -(180 * Math.cos(Math.PI * t.clientX / innerWidth)) * e.limit.value,
                            e.orientation.pitch = 180 * Math.cos(Math.PI * t.clientY / innerHeight) * e.limit.value,
                            e.updateBody()
                    },
                    gyroMove: function(t) {
                        innerWidth > innerHeight ? (e.orientation.yaw = -(t.alpha + t.beta), e.orientation.pitch = t.gamma - 90 * Math.sign(90 - Math.abs(t.beta))) : (e.orientation.yaw = -(t.alpha + t.gamma), e.orientation.pitch = t.beta - 90),
                            e.updateBody()
                    },
                    updateOrigin: function(e) {
                        document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + "px " + (innerHeight / 2 + pageYOffset) + "px"
                    },
                    updateBody: function() {
                        document.body.style.transform = "perspective(" + Math.pow(2, e.fov.value) + "px) translateZ(-" + e.gap.value + "px) rotateX(" + e.orientation.pitch + "deg) rotateY(" + e.orientation.yaw + "deg)"
                    },
                    updateCSS: function() {
                        if (e.non.checked)
                            e.cssDynamic.innerHTML = "";
                        else if (e.off.checked)
                            e.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }";
                        else {
                            for (var t = 0; document.querySelector("body" + " > *".repeat(t)); t++);
                            var a = e.gap.value / t,
                                o = -Math.PI * e.sag.value / t;
                            e.cssDynamic.innerHTML = ` * { transform: translateZ(${a}px) rotateX(${o}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${e.flo.checked ? "overflow: visible !important;" : ""} } *:hover { transform: translateZ(${2 * a}px) rotateX(${2 * o}rad); ${e.flo.checked ? "" : "overflow: visible;"} } `
                        }
                    },
                    toggle: function() {
                        "active" == e.menu.className ? e.menu.removeAttribute("class") : e.menu.className = "active"
                    },
                    quit: function() {
                        window.removeEventListener("deviceorientation", e.gyroMove),
                            window.removeEventListener("mousemove", e.mouseMove),
                            window.removeEventListener("scroll", e.updateOrigin),
                            window.addEventListener("resize", e.updateOrigin),
                            e.menu.remove(),
                            e.cssStatic.remove(),
                            e.cssDynamic.remove(),
                            document.body.removeAttribute("style")
                    },
                    newRange: function(t, a, o, r, i, n, s) {
                        e.menu.appendChild(t),
                            t.type = "range",
                            t.min = o,
                            t.max = i,
                            t.step = r,
                            t.value = n,
                            t.addEventListener("input", s),
                            e.menu.appendChild(document.createElement("span")).innerHTML = a,
                            e.menu.appendChild(document.createElement("br"))
                    },
                    newCheckbox: function(t, a, o) {
                        e.menu.appendChild(t),
                            t.type = "checkbox",
                            t.addEventListener("click", o),
                            e.menu.appendChild(document.createElement("span")).innerHTML = a,
                            e.menu.appendChild(document.createElement("br"))
                    },
                    newButton: function(t, a, o) {
                        e.menu.appendChild(t),
                            t.type = "button",
                            t.value = a,
                            t.addEventListener("click", o)
                    },
                    init: function() {
                        document.body.parentNode.appendChild(e.menu).id = "tri-menu",
                            e.newRange(e.limit, "limit", 0, .03125, 1, .125, e.updateBody),
                            e.newRange(e.gap, "gap / distance", 0, 32, 512, 128, function() {
                                e.updateCSS(),
                                    e.updateBody()
                            }),
                            e.newRange(e.sag, "sag", -.25, .03125, .25, 0, e.updateCSS),
                            e.newRange(e.fov, "field of view", 7, 1, 13, 10, e.updateBody),
                            e.newCheckbox(e.flo, "force overflow", e.updateCSS),
                            e.flo.setAttribute("checked", ""),
                            e.newCheckbox(e.off, "flatten layers", e.updateCSS),
                            e.newCheckbox(e.non, "flatten everything", e.updateCSS),
                            e.newButton(e.end, "Quit", e.quit),
                            e.newButton(e.tgl, "≡", e.toggle),
                            e.tgl.id = "tri-toggle",
                            e.menu.appendChild(e.cssStatic).innerHTML = " html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; }",
                            e.menu.appendChild(e.cssDynamic),
                            e.updateCSS(),
                            window.addEventListener("deviceorientation", e.gyroMove),
                            window.addEventListener("mousemove", e.mouseMove),
                            window.addEventListener("scroll", e.updateOrigin),
                            window.addEventListener("resize", e.updateOrigin),
                            window.scrollBy(0, 1)
                    }
                };
                e.init()
            }
        }, {
            name: "History Flooder",
            description: "Floods browser history with specified amount of entries",
            inputs: [{
                name: "Amount",
                type: "number"
            }],
            run: function(e) {
                var t = e;
                done = !1,
                    C = window.location.href;
                for (var a = 1; a <= t; a++)
                    history.pushState(0, 0, a == t ? C : a.toString()), a == t && (done = !0);
                !0 === done && alert("History flood successful! " + window.location.href + " now appears in your history " + t + (1 == t ? " time." : " times. "))
            }
        }, {
            name: "Auto Clicker",
            description: "Automatically clicks for you. Press S to toggle.",
            inputs: [{
                name: "Click Delay",
                type: "number"
            }],
            run: function(inputs) {
                clicker: {
                    "use strict";

                    let clickInterval = null;
                    let clickingEnabled = true;

                    const {
                        Number,
                        self
                    } = window;
                    const milliseconds = Number.parseInt(inputs, 10);

                    if (false === Number.isSafeInteger(milliseconds)) {
                        self.alert("Input was not an integer");
                        break clicker;
                    }

                    let clientX = 0,
                        clientY = 0;
                    const {
                        document
                    } = self;

                    function startClicking() {
                        clickInterval = self.setInterval(() => {
                            document.elementFromPoint(clientX, clientY)?.click?.();
                        }, milliseconds);
                    }

                    function stopClicking() {
                        self.clearInterval(clickInterval);
                        clickInterval = null;
                    }

                    startClicking();

                    document.addEventListener("mousemove", event => {
                        ({
                            clientX,
                            clientY
                        } = event);
                    }, {
                        passive: true
                    });

                    self.addEventListener("keydown", event => {
                        if (event.key === "s") {
                            if (clickingEnabled) {
                                stopClicking();
                            } else {
                                startClicking();
                            }
                            clickingEnabled = !clickingEnabled;
                        }
                    });
                }
            }
        }, {
            name: "Tab Cloaker",
            description: "Changes the tab image and name",
            inputs: [{
                name: "Icon URL",
                type: "text",
            }, {
                name: "Tab Title",
                type: "text",
            }],
            run: function(e, t) {
                var a = document.querySelector("link[rel*='icon']") || document.createElement("link");
                a.type = "image/x-icon",
                    a.rel = "shortcut icon",
                    a.href = e || "https://www.blooket.com/favicon.ico",
                    document.getElementsByTagName("head")[0].appendChild(a),
                    document.title = t || "Blooket"
            }
        }],
        host: [{
            name: "Host Any Gamemode",
            description: "Change the selected gamemode on the host settings page",
            inputs: [{
                name: "Gamemode",
                type: "options",
                options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"]
            }],
            run: function(e) {
                let t = document.createElement("iframe");
                if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/host/settings" != location.pathname)
                    return alert("Run this script on the host settings page");
                let {
                    stateNode: a
                } = Object.values(function e(t = document.querySelector("body>div")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }
                    ())[1].children[0]._owner;
                a.setState({
                    settings: {
                        type: e
                    }
                })
            }
        }, {
            name: "Toggle Spooky Theme",
            description: "Toggles the spooky theme for Gold Quest",
            run: function() {
                (() => {
                    const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                    sn.season = sn.season ? 0 : 1;
                    sn.render();
                })();
            }
        }, {
            name: "Freeze Timer",
            description: "Makes the host timer stop ingame",
            run: function() {
                (() => {
                    const {
                        stateNode
                    } = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner;
                    clearInterval(stateNode.timerInterval);
                    stateNode.timerInterval = setInterval(function() {
                        stateNode?.getClients?.(!1);
                    }, 4000);
                })();
            }
        }, {
            name: "Render Hours on Host Timer",
            description: "Renders hours on host timer(use with remove host time limit). Can only render up to 24 hours.",
            run: function() {
                (() => {
                    const format = "HH:mm:ss";
                    const reg = '/(\\[[^\\[]*\\])|(\\\\)?(LTS|LT|LL?L?L?|l{1,4})/g';
                    if (!RegExp.prototype.tes) {
                        RegExp.prototype.tes = RegExp.prototype.test;
                    }
                    RegExp.prototype.test = function(a) {
                        if (a == "mm:ss" && this.toString() == reg) {
                            return !0;
                        }
                        return RegExp.prototype.tes.apply(this, arguments);
                    }
                    if (!String.prototype.rep) {
                        String.prototype.rep = String.prototype.replace;
                    }
                    String.prototype.replace = function(a, b) {
                        if (this == "mm:ss" && a.toString() == reg) {
                            return format;
                        }
                        return String.prototype.rep.apply(this, arguments);
                    }
                })();
            }
        }, {
            name: "View Lobbychat Logs",
            description: "View messages players type in chat",
            run: function() {
                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                document.addEventListener("keydown", function(e) {
                    if (e.key === "Shift" && e.code === "ShiftRight") {
                        c.style.display = c.style.display === "none" ? "block" : "none";
                    }
                });

                const c = document.createElement("div");
                c.className = "chat-box";
                document.body.appendChild(c);
                const h = document.createElement("div");
                h.className = "chat-header";
                h.textContent = "Chat Logs (RSHIFT to hide)";
                c.appendChild(h);
                const b = document.createElement("div");
                b.className = "chat-body";
                c.appendChild(b);

                function a(e) {
                    const t = document.createElement("div");
                    t.textContent = e;
                    b.appendChild(t);
                    b.scrollTop = b.scrollHeight;
                }

                c.style.position = "fixed";
                c.style.bottom = "20px";
                c.style.right = "20px";
                c.style.width = "300px";
                c.style.height = "400px";
                c.style.backgroundColor = "#fff";
                c.style.border = "1px solid #ccc";
                c.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
                c.style.display = "block";

                b.style.height = "360px";
                b.style.overflowY = "scroll";
                b.style.padding = "10px";

                h.addEventListener("click", () => {
                    b.classList.toggle("open");
                });

                var da = reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

                function handleChat(e, t) {
                    if (t != null) {
                        if (e.includes("/msg")) {
                            t?.msg && (console.log(t.msg), a(e.split("/")[2] + ": " + t.msg));
                        }
                    }
                }

                reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) {
                    console.log(e, t, a, n);
                    handleChat(e, t);
                    da(e, t, a, n);
                };

                window.logsv = false;

                function onsv(e) {
                    if (window.logsv) {
                        a("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ((typeof e.val === 'object') ? JSON.stringify(e.val) : e.val));
                    }
                }

                var orgsv = reactHandler().stateNode.props.liveGameController.setVal;
                reactHandler().stateNode.props.liveGameController.setVal = function() {
                    onsv.apply(this, arguments);
                    orgsv.apply(this, arguments);
                };

                reactHandler().stateNode.props.liveGameController._liveApp.database().ref(`${reactHandler().stateNode.props.liveGameController._liveGameCode}`).on("value", e => {});
                a("Lobbychat successfully loaded!");

                function app() {
                    c.style.wordWrap = "break-word";
                }

                app();
            }
        }, {
            name: "Remove Host Time Limit",
            description: "Removes the host time limit",
            run: function() {
                (() => {
                    const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                    sn.onAmountUpdate = function(t) {
                        let settings = sn.state.settings;
                        settings.amount = parseInt(t.target.value);
                        sn.setState({
                            settings
                        });
                    }
                })();
            }
        }, {
            name: "Free Player Slots",
            description: "Allows more players to join if the game is full",
            run: async () => {
                let i = document.createElement('iframe');
                document.body.append(i);
                const alert = i.contentWindow.alert.bind(window);
                i.remove();
                const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                const players = await stateNode.props.liveGameController.getDatabaseVal("c");
                let freed = 0;
                if (!stateNode.state.blockedUsers) {
                    stateNode.state.blockedUsers = [];
                }
                async function wait(time) {
                    return new Promise(e => {
                        setTimeout(e, time);
                    });
                }
                async function blockUser(name) {
                    if (stateNode.state.blockedUsers.includes(name)) {
                        return;
                    }
                    const res = await fetch("https://fb.blooket.com/c/firebase/block", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify({
                            g: stateNode.props.host.id,
                            u: name
                        }),
                        credentials: "include"
                    });
                    if (res.status !== 200) {
                        return;
                    }
                    stateNode.state.blockedUsers.push(name);
                    freed++;
                    if (freed % parseInt("15") == 0) {
                        await wait(600);
                    }
                    C.alerts?.[0].addLog("Freed user: " + name);
                }
                for (let i in players) {
                    await blockUser(i);
                }
                alert(`Freed slots: ${freed}`);
            }
        }, {
            name: "Realtime Updates",
            description: "Makes leaderboard updates happen in real-time.",
            run: async () => {
                const stateNode = () => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                (await stateNode().props.liveGameController.getDatabaseRef("")).on("value", e => stateNode()?.getClients?.(!1));
            }
        }, {
            name: "Anti-Flood",
            description: "Prevents bots from flooding the game",
            enabled: false,
            data: null,
            run: function() {
                if (this.enabled) {
                    return;
                }

                this.enabled = true;
                this.data = setInterval(async () => {
                    var iframe = document.createElement("iframe");
                    document.body.append(iframe);
                    window.confirm = iframe.contentWindow.confirm.bind(window);
                    iframe.style.display = "none";

                    try {
                        let stateNode = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode;
                        var dbRef = await stateNode.props.liveGameController.getDatabaseRef("c");
                        let currentClients = {},
                            clientCounts = {};

                        dbRef.on("value", snapshot => {
                            var clients = snapshot.val() || {};
                            var newClients = [];

                            for (const key in clients) {
                                if (!currentClients[key]) {
                                    newClients.push(key);
                                    clientCounts[key.replace(/[0-9]/g, "")] = (clientCounts[key.replace(/[0-9]/g, "")] || 0) + 1;
                                }
                            }

                            currentClients = clients;

                            for (const client of newClients) {
                                if (currentClients[client].g || clientCounts[client.replace(/[0-9]/g, "")] > 1) {
                                    stateNode.props.liveGameController.blockUser(client);
                                    clientCounts[client.replace(/[0-9]/g, "")]--;
                                }
                            }
                        });
                    } catch (error) {
                        console.error("An error occurred", error);
                    }
                }, 2000);
            }
        }, {
            name: "Enable Mobile Hosting",
            description: "Makes it so that you can host on mobile",
            run: function() {
                (function() {
                    var metaViewport = document.querySelector('meta[name="viewport"]');
                    if (metaViewport) {
                        metaViewport.parentNode.removeChild(metaViewport);
                    }
                    var newMetaViewport = document.createElement('meta');
                    newMetaViewport.name = 'viewport';
                    newMetaViewport.content = 'width=1280, initial-scale=1';
                    document.head.appendChild(newMetaViewport);
                })();
            }
        }, {
            name: "Kick All Players",
            description: "Kicks all players from your game.",
            run: async () => {
                const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                const db = await sn.props.liveGameController.getDatabaseVal("");
                sn.props.liveGameController.setVal({
                    path: "bu",
                    val: Object.keys(db.c).reduce((a, b) => (a[b] = 1, a), db.bu ? db.bu : {})
                });
                sn.props.liveGameController.setVal({
                    path: "c",
                    val: {}
                });
            }
        }],
        royale: [{
            name: "Auto Answer (Toggle)",
            description: "Toggles auto answer on",
            type: "toggle",
            enabled: !1,
            data: null,
            run: function() {
                this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                    var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                }, 50))
            }
        }, {
            name: "Auto Answer",
            description: "Chooses the correct answer for you. Will answer with the time provided.",
            inputs: [{
                name: "Time (milliseconds)",
                type: "number",
                min: 0,
                max: 20000,
            }],
            run: (a) => {
                const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                stateNode.startTime = performance.now() - a;
                stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
            }
        }],
        rush: [{
            name: "Set Blooks",
            description: "Sets amount of blooks you or your team has",
            inputs: [{
                name: "Blooks",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        numBlooks: e
                    }),
                    t.isTeam ? t.props.liveGameController.setVal({
                        path: `a/${t.props.client.name}/bs`,
                        val: e
                    }) : t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/bs`,
                        val: numDefense
                    })
            }
        }, {
            name: "Set Defense",
            description: "Sets amount of defense you or your team has (Max 4)",
            inputs: [{
                name: "Defense (max 4)",
                type: "number",
                max: 4
            }],
            run: function(e) {
                var e = Math.min(e, 4),
                    t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        numDefense: e
                    }),
                    t.isTeam ? t.props.liveGameController.setVal({
                        path: `a/${t.props.client.name}/d`,
                        val: e
                    }) : t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/d`,
                        val: e
                    })
            }
        }, {
            name: "Freeze Host :)",
            description: "They aint coming back with this one",
            run: function() {
                var largeNumber = "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                    numBlooks: largeNumber
                });
                if (t.isTeam) {
                    t.props.liveGameController.setVal({
                        path: `a/${t.props.client.name}/bs`,
                        val: largeNumber
                    });
                } else {
                    t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/bs`,
                        val: largeNumber
                    });
                }
            }
        }],
        workshop: [{
            name: "Remove Distractions",
            description: "Removes all enemy distractions",
            run: function() {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    fog: !1,
                    dusk: !1,
                    wind: !1,
                    plow: !1,
                    blizzard: !1,
                    force: !1,
                    canada: !1,
                    trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                })
            }
        }, {
            name: "Send Distraction",
            description: "Sends a distraction to everyone else playing",
            inputs: [{
                name: "Distraction",
                type: "options",
                options: Object.entries({
                    c: "Oh Canada",
                    b: "Blizzard",
                    f: "Fog Spell",
                    d: "Dark & Dusk",
                    w: "Howling Wind",
                    g: "Gift Time!",
                    t: "TREES",
                    s: "Snow Plow",
                    fr: "Use The Force"
                }).map(([e, t]) => ({
                    name: t,
                    value: e
                }))
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.safe = !0,
                    t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/tat`,
                        val: e
                    })
            }
        }, {
            name: "Set Toys",
            description: "Sets amount of toys",
            inputs: [{
                name: "Toys",
                type: "number"
            }],
            run: function(e) {
                var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.setState({
                        toys: e
                    }),
                    t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            t: e
                        }
                    })
            }
        }, {
            name: "Set Toys Per Question",
            description: "Sets amount of toys per question",
            inputs: [{
                name: "Toys Per Question",
                type: "number"
            }],
            run: function(e) {
                Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                    toysPerQ: e
                })
            }
        }, {
            name: "Swap Toys",
            description: "Swaps toys with someone",
            inputs: [{
                name: "Player",
                type: "options",
                options() {
                    let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
                }
            }],
            run: function(e) {
                let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                t.props.liveGameController.getDatabaseVal("c", a => {
                    var o;
                    a && Object.keys(a).map(e => e.toLowerCase()).includes(e.toLowerCase()) && ([a, {
                        t: o
                    }] = Object.entries(a).find(([t]) => t.toLowerCase() == e.toLowerCase()), t.props.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            t: o,
                            tat: a + ":swap:" + t.state.toys
                        }
                    }), t.setState({
                        toys: o
                    }))
                })
            }
        }],
        credits: [{
            element: l("div", {
                className: "creditContainer",
                style: {
                    margin: "15px 15px 5px 15px",
                    backgroundColor: "rgb(0 0 0 / 50%)",
                    width: "95%",
                    height: "370px",
                    borderRadius: "7px",
                    display: "block",
                    overflow: "auto",
                    padding: "10px",
                    boxSizing: "border-box",
                    textAlign: "center"
                }
            }, (function() {
                const container = document.createElement("div");
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.overflow = "auto";
                container.style.textAlign = "center";

                const creditsList = [{
                    name: "DannyDan0167",
                    description: "Founder of <a href='https://github.com/randomstuff69/blooketpluscheats/' target='_blank' style='color: #0000FF;'>Blooket Cheats Plus</a>"
                }, {
                    name: "CryptoDude3",
                    description: "Co-Founder of Blooket Cheats Plus and made almost all of the new cheats"
                }, {
                    name: "Minesraft2",
                    description: "Creator of the GUI and old cheats"
                }, {
                    name: "05Konz",
                    description: `Owner of the original <a href='https://github.com/Blooket-Council/Blooket-Cheats' target='_blank' style='color: #0000FF;'>Blooket Cheats</a> and old cheats`
                }, {
                    name: "Randomstuff69",
                    description: `Hosting the <a href='https://github.com/randomstuff69/blooketpluscheats/' target='_blank' style='color: #0000FF;'>Blooket Cheats Plus</a> repository`
                }];

                creditsList.forEach(credit => {
                    const heading = document.createElement("h1");
                    heading.textContent = credit.name;
                    heading.style.margin = "0";

                    const description = document.createElement("h3");
                    description.innerHTML = credit.description;
                    description.style.margin = "0 0 15px 0";

                    container.appendChild(heading);
                    container.appendChild(description);
                });

                return container;
            })())
        }],
        settings: [{
            name: "Import Settings",
            description: "Import a custom theme",
            inputs: [{
                name: "JSON Data",
                type: "string"
            }],
            run: function(e) {
                try {
                    JSON.parse(e)
                } catch (t) {
                    return alert("Invalid JSON provided")
                }
                for (let a in e = {
                        backgroundColor: "rgb(11, 194, 207)",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa",
                        defaultButton: "#9a49aa",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#7a039d",
                        contentBackground: "rgb(64, 17, 95)",
                        ...JSON.parse(e)
                    }, c.setItem("theme", e), e)
                    p.sheet.cssRules[0].style.setProperty("--" + a, e[a])
            }
        }, {
            name: "Export Settings",
            description: "Export the current theme to JSON",
            run: async function() {
                await navigator.clipboard.writeText(JSON.stringify(c.data.theme, null, 4)),
                    prompt("Text copied to clipboard. (Paste below to test)")
            }
        }, {
            name: "Defaults",
            description: "Changes all the settings to a preset",
            inputs: [{
                name: "Theme",
                type: "options",
                options: [{
                    name: "Default",
                    value: {
                        backgroundColor: "rgb(11, 194, 207)",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa",
                        defaultButton: "#9a49aa",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#7a039d",
                        contentBackground: "rgb(64, 17, 95)"
                    }
                }, {
                    name: "Landscapes (Random)",
                    value: {
                        backgroundColor: "url(https://source.unsplash.com/1600x900/?landscape)",
                        infoColor: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        cheatList: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        defaultButton: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        disabledButton: "linear-gradient(rgba(225, 0, 0, 0.3), rgba(225, 0, 0, 0.3))",
                        enabledButton: "linear-gradient(rgba(0, 128, 0, 0.3), rgba(0, 128, 0, 0.3))",
                        textColor: "white",
                        inputColor: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        contentBackground: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                    }
                }, {
                    name: "Blacket",
                    value: {
                        backgroundColor: "#4f4f4f",
                        infoColor: "#2f2f2f",
                        cheatList: "#2f2f2f",
                        defaultButton: "#4f4f4f",
                        disabledButton: "#eb6234",
                        enabledButton: "#00c20c",
                        textColor: "white",
                        inputColor: "#3f3f3f",
                        contentBackground: "#2f2f2f"
                    }
                }, {
                    name: "Ploopit",
                    value: {
                        backgroundColor: "url(https://i.ibb.co/6vvdq3f/ploopit.png)",
                        infoColor: "#3C75F5",
                        cheatList: "#204DD0",
                        defaultButton: "#204DD0",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#3f3f3f",
                        contentBackground: "#3C75F5"
                    }
                }, {
                    name: "Betastar",
                    value: {
                        backgroundColor: "url(https://i.ibb.co/8bkDpCn/GIFMaker-me.gif)",
                        infoColor: "#282828",
                        cheatList: "#282828",
                        defaultButton: "white",
                        disabledButton: "#9D0000",
                        enabledButton: "#013220",
                        textColor: "black",
                        inputColor: "gray",
                        contentBackground: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                    }
                }, {
                    name: "Skool.lol",
                    value: {
                        backgroundColor: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)",
                        cheatList: "#1e2124",
                        infoColor: "#1e2124",
                        defaultButton: "#36393e",
                        inputColor: "#1e2124",
                        enabledButton: "#9c9a9a",
                        textColor: "white",
                        disabledButton: "#171717",
                        contentBackground: "#292929"
                    }
                }, {
                    name: "Blue - Purple Background",
                    value: {
                        backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 220px, rgba(128,0,255,1) 100%)"
                    }
                }, {
                    name: "Saint Patricks Background",
                    value: {
                        backgroundColor: "rgb(9, 148, 65)"
                    }
                }, {
                    name: "Halloween Background",
                    value: {
                        backgroundColor: "rgb(41, 41, 41)"
                    }
                }, {
                    name: "Fall Background",
                    value: {
                        backgroundColor: "rgb(224, 159, 62)"
                    }
                }, {
                    name: "Winter Background",
                    value: {
                        backgroundColor: "linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255))"
                    }
                }, {
                    name: "Crypto Hack",
                    value: {
                        backgroundColor: "radial-gradient(#11581e,#041607)",
                        infoColor: "#1a1a1a",
                        cheatList: "#1a1a1a",
                        defaultButton: "rgb(88 175 88)",
                        disabledButton: "#A02626",
                        enabledButton: "#0b601b",
                        textColor: "white",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "#11581e"
                    }
                }, {
                    name: "Fishing Frenzy",
                    value: {
                        backgroundColor: "linear-gradient(180deg,#9be2fe 0,#67d1fb)",
                        infoColor: "#c8591e",
                        cheatList: "#c8591e",
                        defaultButton: "#ff751a",
                        disabledButton: "#bf0e0e",
                        enabledButton: "#2fb62f",
                        textColor: "white",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "radial-gradient(#02b0ea 40%, #1d86ea)"
                    }
                }, {
                    name: "Deceptive Dinos",
                    value: {
                        backgroundColor: 'radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url("https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png"), #ead49a',
                        infoColor: "#af8942",
                        cheatList: "#af8942",
                        defaultButton: "#af8942",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "rgb(0 0 0 / 10%)",
                        contentBackground: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px"
                    }
                }, {
                    name: "Blook Rush",
                    value: {
                        backgroundColor: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)",
                        defaultButton: "#36c",
                        inputColor: "rgb(0 0 0 / 25%)",
                        infoColor: "#36c",
                        cheatList: "#36c",
                        contentBackground: "#888",
                        textColor: "white",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547"
                    }
                }, {
                    name: "Factory",
                    value: {
                        defaultButton: "#1563bf",
                        infoColor: "#a5aabe",
                        cheatList: "#a5aabe",
                        contentBackground: "#2d313d",
                        backgroundColor: "#3a3a3a",
                        enabledButton: "rgb(75, 194, 46)",
                        disabledButton: "#9a49aa",
                        inputColor: "rgb(0 0 0 / 25%)",
                        textColor: "white"
                    }
                }, {
                    name: "Cafe",
                    value: {
                        backgroundColor: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
                        defaultButton: "#0bc2cf",
                        inputColor: "rgb(0 0 0 / 25%)",
                        infoColor: "#ac7339",
                        cheatList: "#ac7339",
                        contentBackground: "rgb(64, 64, 64)",
                        textColor: "white",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547"
                    }
                }, {
                    name: "Tower of Doom",
                    value: {
                        backgroundColor: "rgb(41 41 41)",
                        disabledButton: "rgb(151, 15, 5)",
                        defaultButton: "#333",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "#404040",
                        enabledButton: "#4bc22e",
                        textColor: "white",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa"
                    }
                }, {
                    name: "Monster Brawl",
                    value: {
                        defaultButton: "rgb(45, 51, 67)",
                        backgroundColor: "rgb(78, 95, 124)",
                        inputColor: "rgb(0 0 0 / 25%)",
                        contentBackground: "linear-gradient(0deg,#374154,#4f5b74)",
                        infoColor: "#374154",
                        cheatList: "#374154",
                        textColor: "white",
                        enabledButton: "#47A547",
                        disabledButton: "#A02626"
                    }
                }, {
                    name: "Tower Defense 2",
                    value: {
                        backgroundColor: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
                        cheatList: "#a33c22",
                        infoColor: "#a33c22",
                        defaultButton: "#40b1d8",
                        inputColor: "#3e8cbe",
                        contentBackground: "#293c82",
                        enabledButton: "#47A547",
                        disabledButton: "#A02626",
                        textColor: "white"
                    }
                }]
            }],
            run: function(e) {
                for (let t in c.setItem("theme", {
                        ...c.data.theme,
                        ...e
                    }), e)
                    p.sheet.cssRules[0].style.setProperty("--" + t, e[t])
            }
        }, {
            name: "Scale",
            description: "Forces the GUI to scale from 25%-100%",
            inputs: [{
                type: "number",
                name: "Percent scale",
                min: 25,
                max: 100,
                value: 100 * (c.data.scale || 1)
            }],
            run: function(e) {
                e = Math.min(Math.max(e, 25), 100),
                    c.setItem("scale", e / 100),
                    _.style.transform = `scale(${e / 100})`
            }
        }, {
            name: "Hide Keybind",
            description: "Change the hide keybind (Click button after input to change)",
            inputs: [{
                type: "function",
                name: "Input",
                function: e => B(({
                    shift: t,
                    ctrl: a,
                    alt: o,
                    key: r
                }) => e("" + [a && "Ctrl", t && "Shift", o && "Alt", r && r.toUpperCase()].filter(Boolean).join(" + ")))
            }],
            run: function(e) {
                c.setItem("hide", e),
                    m.update(c.data.hide || {
                        ctrl: !0,
                        key: "e"
                    }, c.data.close || {
                        ctrl: !0,
                        key: "x"
                    })
            }
        }, {
            name: "Close Keybind",
            description: "Change the quick close keybind (Click button after input to change)",
            inputs: [{
                type: "function",
                name: "Input",
                function: e => B(({
                    shift: t,
                    ctrl: a,
                    alt: o,
                    key: r
                }) => e("" + [a && "Ctrl", t && "Shift", o && "Alt", r && r.toUpperCase()].filter(Boolean).join(" + ")))
            }],
            run: function(e) {
                c.setItem("close", e),
                    m.update(c.data.hide || {
                        ctrl: !0,
                        key: "e"
                    }, c.data.close || {
                        ctrl: !0,
                        key: "x"
                    })
            }
        }, {
            name: "Background Color",
            description: "Changes the background color of the GUI",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--backgroundColor", e),
                    c.setItem("theme.backgroundColor", e)
            }
        }, {
            name: "Category List Color",
            description: "Changes the categories list background color",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--cheatList", e),
                    c.setItem("theme.cheatList", e)
            }
        }, {
            name: "Info Color",
            description: "Changes the color of the information at the top of the GUI",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--infoColor", e),
                    c.setItem("theme.infoColor", e)
            }
        }, {
            name: "Button Color",
            description: "Changes the color of the cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--defaultButton", e),
                    c.setItem("theme.defaultButton", e)
            }
        }, {
            name: "Enabled Toggle Color",
            description: "Changes the color of enabled toggle cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                c.setItem("theme.enabledButton", e)
            }
        }, {
            name: "Disabled Toggle Color",
            description: "Changes the color of disabled toggle cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--disabledButton", e),
                    c.setItem("theme.disabledButton", e)
            }
        }, {
            name: "Text Color",
            description: "Changes the text color",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--textColor", e),
                    c.setItem("theme.textColor", e)
            }
        }, {
            name: "Input Color",
            description: "Changes the color of inputs, like the set gold number input",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--inputColor", e),
                    c.setItem("theme.inputColor", e)
            }
        }, {
            name: "Content Color",
            description: "Changes the background color of the cheats",
            inputs: [{
                type: "string",
                name: "Color"
            }],
            run: function(e) {
                p.sheet.cssRules[0].style.setProperty("--contentBackground", e),
                    c.setItem("theme.contentBackground", e)
            }
        }],
        chat: [{
            element: l("div", {
                className: "alertContainer",
                style: {
                    margin: "15px",
                    backgroundColor: "rgb(0 0 0 / 50%)",
                    width: "95%",
                    height: "370px",
                    borderRadius: "7px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    padding: "0px",
                    boxSizing: "border-box"
                }
            }, (function() {
                var j = 0;
                var container = document.createElement("div");
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.display = "flex";
                container.style.flexDirection = "column";
                container.style.position = "relative";

                var chatBox = document.createElement("div");
                chatBox.className = "chat-box";
                chatBox.style.flex = "1";
                chatBox.style.overflow = "auto";
                chatBox.style.display = "flex";
                chatBox.style.flexDirection = "column";
                container.appendChild(chatBox);

                var chatHeader = document.createElement("div");
                chatHeader.className = "chat-header";
                chatHeader.textContent = "Chat";
                chatHeader.style.padding = "5px 10px";
                chatHeader.style.borderBottom = "1px solid #ccc";
                chatHeader.style.display = "flex";
                chatHeader.style.justifyContent = "space-between";
                chatHeader.style.alignItems = "center";
                chatHeader.style.fontSize = "14px";
                chatBox.appendChild(chatHeader);

                var themeDropdown = document.createElement("select");
                themeDropdown.style.border = "none";
                themeDropdown.style.backgroundColor = "#f1f1f1";
                themeDropdown.style.padding = "3px 5px";
                themeDropdown.style.borderRadius = "5px";
                themeDropdown.style.cursor = "pointer";
                themeDropdown.style.fontSize = "14px";
                chatHeader.appendChild(themeDropdown);

                var lightOption = document.createElement("option");
                lightOption.value = "light";
                lightOption.textContent = "Light";
                themeDropdown.appendChild(lightOption);

                var darkOption = document.createElement("option");
                darkOption.value = "dark";
                darkOption.textContent = "Dark";
                themeDropdown.appendChild(darkOption);

                var chatBody = document.createElement("div");
                chatBody.className = "chat-body";
                chatBody.style.flex = "1";
                chatBody.style.overflow = "auto";
                chatBody.style.padding = "10px";
                chatBody.style.boxSizing = "border-box";
                chatBody.style.display = "flex";
                chatBody.style.flexDirection = "column";
                chatBox.appendChild(chatBody);

                var chatInput = document.createElement("input");
                chatInput.type = "text";
                chatInput.className = "chat-input";
                chatInput.placeholder = "Type a message...";
                chatInput.style.border = "1px solid #ccc";
                chatInput.style.padding = "10px";
                chatInput.style.boxSizing = "border-box";
                chatInput.style.width = "100%";
                chatInput.style.position = "relative";
                chatInput.style.zIndex = "1";
                container.appendChild(chatInput);

                function applyTheme(theme) {
                    if (theme === "dark") {
                        chatBox.style.backgroundColor = "#333";
                        chatHeader.style.backgroundColor = "#444";
                        chatBody.style.backgroundColor = "#333";
                        chatBody.style.color = "#fff";
                        chatInput.style.backgroundColor = "#444";
                        chatInput.style.color = "#fff";
                        themeDropdown.style.backgroundColor = "#444";
                        themeDropdown.style.color = "#fff";
                        chatHeader.style.color = "#fff";
                    } else {
                        chatBox.style.backgroundColor = "#fff";
                        chatHeader.style.backgroundColor = "#f1f1f1";
                        chatBody.style.backgroundColor = "#fff";
                        chatBody.style.color = "#000";
                        chatInput.style.backgroundColor = "#fff";
                        chatInput.style.color = "#000";
                        themeDropdown.style.backgroundColor = "#f1f1f1";
                        themeDropdown.style.color = "#000";
                        chatHeader.style.color = "#000";
                    }
                }

                function loadTheme() {
                    var savedTheme = localStorage.getItem("chatTheme") || "light";
                    applyTheme(savedTheme);
                    themeDropdown.value = savedTheme;
                }

                themeDropdown.addEventListener("change", function() {
                    var selectedTheme = themeDropdown.value;
                    applyTheme(selectedTheme);
                    localStorage.setItem("chatTheme", selectedTheme);
                });

                loadTheme();

                function reactHandler() {
                    return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
                }

                function parseCmd(t) {
                    if (t.charAt(0) === "/") {
                        var c = t.split(" ");
                        var cm = c[0].replace("/", "");
                        c.splice(0, 1);
                        return {
                            cmd: cm,
                            args: c
                        };
                    } else {
                        return false;
                    }
                }

                function appendMessage(message) {
                    var messageDiv = document.createElement("div");
                    messageDiv.textContent = message;
                    messageDiv.style.color = "inherit";
                    messageDiv.style.marginBottom = "5px";
                    chatBody.appendChild(messageDiv);
                    chatBody.scrollTop = chatBody.scrollHeight;
                }

                function sendMessage(message) {
                    if (reactHandler().stateNode.props.client.hostId) {
                        var t = parseCmd(message);
                        if (t) {
                            switch (t.cmd) {
                                case "cb":
                                    setBlook(t.args.join(" "));
                                    break;
                                case "clear":
                                    chatBody.innerHTML = "";
                                    break;
                                case "dumpstate":
                                    dumpstate();
                                    break;
                                case "list":
                                    list();
                                    break;
                                case "tlog":
                                    tsvlog();
                                    break;
                                case "setval":
                                    setv(t.args);
                                    break;
                                case "setstate":
                                    setstate(t.args);
                                    break;
                                case "ahelp":
                                    appendMessage("Advanced Commands: setval(sets val logged by tlog ex /setval b Chicken), tlog(toggles setval log), dumpstate(dumps react state), setstate(sets react state /setstate crypto:5 crypto2:5 etc)");
                                    break;
                                case "help":
                                    appendMessage("Available Commands: help(gives help), ahelp(advanced commands help), cb(changes blook /cb cow), list(lists players connected), dump(dumps all available info about a player, passwords, etc(/dump player)), clear(clears chat), code(gives game code), unlock(unlocks blook on lobby screen)");
                                    break;
                                case "dump":
                                    flist(t.args.join(" "));
                                    break;
                                case "unlock":
                                    unlockBlook(t.args.join(" "));
                                    break;
                                case "code":
                                    appendMessage("Game Code: " + reactHandler().stateNode.props.client.hostId);
                                    break;
                                default:
                                    appendMessage("Unrecognized chat command!");
                                    break;
                            }
                        } else {
                            try {
                                reactHandler().stateNode.props.liveGameController.setVal({
                                    id: reactHandler().stateNode.props.client.hostId,
                                    path: "c/" + reactHandler().stateNode.props.client.name + "/msg",
                                    val: {
                                        i: j,
                                        msg: message
                                    }
                                });
                                j++;
                            } catch (error) {
                                appendMessage("Failed to send message: " + error.message);
                            }
                        }
                    } else {
                        appendMessage("You must be in a game to chat!");
                    }
                }

                function dumpstate() {
                    var state = reactHandler().stateNode.state;
                    var stateDump = Object.keys(state).map(e => {
                        var obj = state[e];
                        if (obj != null) {
                            if (Array.isArray(obj) && typeof obj === "object") {
                                obj = "[Array]";
                            }
                            return e + ":" + obj;
                        } else {
                            return e + ":N/A";
                        }
                    }).join("; ");
                    appendMessage("DumpState: " + stateDump);
                }

                function setstate(args) {
                    try {
                        var t = {};
                        args.forEach(e => {
                            var p = e.split(":");
                            if (!Number.isNaN(parseInt(p[1]))) {
                                p[1] = parseInt(p[1]);
                            }
                            t[p[0]] = p[1];
                        });
                        reactHandler().stateNode.setState(t);
                        appendMessage("Set State Successful!");
                    } catch (error) {
                        appendMessage("Failed to set state: " + error.message);
                    }
                }

                function setv(args) {
                    try {
                        reactHandler().stateNode.props.liveGameController.setVal({
                            path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
                            val: args.slice(1).join(" ")
                        });
                        appendMessage("SetVal Successful!");
                    } catch (error) {
                        appendMessage("Failed to set value: " + error.message);
                    }
                }

                function tsvlog() {
                    window.logsv = !window.logsv;
                    appendMessage("SetVal log set to " + (window.logsv ? "Enabled" : "Disabled"));
                }

                function setBlook(b) {
                    var blooks = webpackJsonp.push([
                        [], {
                            ['1234']: (_, a, b) => {
                                a.webpack = b
                            }
                        },
                        [
                            ['1234']
                        ]
                    ]).webpack("MDrD").a;
                    b = Object.keys(blooks).find(e => b.toLowerCase() === e.toLowerCase());
                    if (blooks[b]) {
                        appendMessage("Setting blook to " + b + "!");
                        try {
                            reactHandler().stateNode.props.liveGameController.setVal({
                                id: reactHandler().stateNode.props.client.hostId,
                                path: "c/" + reactHandler().stateNode.props.client.name,
                                val: {
                                    b: b
                                }
                            });
                            reactHandler().stateNode.props.client.blook = b;
                        } catch (error) {
                            appendMessage("Failed to set blook: " + error.message);
                        }
                    } else {
                        appendMessage("No blook with that name was found!");
                    }
                }

                function unlockBlook(b) {
                    var blooks = webpackJsonp.push([
                        [], {
                            ['1234']: (_, a, b) => {
                                a.webpack = b
                            }
                        },
                        [
                            ['1234']
                        ]
                    ]).webpack("MDrD").a;
                    b = Object.keys(blooks).find(e => b.toLowerCase() === e.toLowerCase());
                    if (blooks[b]) {
                        try {
                            reactHandler().stateNode.state.unlocks.push(b);
                            reactHandler().stateNode.forceUpdate();
                        } catch (error) {
                            appendMessage("Failed to unlock blook: " + error.message);
                        }
                    } else {
                        appendMessage("No blook with that name was found!");
                    }
                }

                function list() {
                    try {
                        reactHandler().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
                            appendMessage("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","));
                        });
                    } catch (error) {
                        appendMessage("Failed to list players: " + error.message);
                    }
                }

                function flist(p) {
                    reactHandler().stateNode.props.liveGameController.getDatabaseVal("c/" + p).then(e => {
                        if (e != null) {
                            appendMessage("Dump: " + JSON.stringify(e));
                        } else {
                            appendMessage("Player not found!");
                        }
                    }).catch(error => {
                        appendMessage("Error fetching player info: " + error.message);
                    });
                }

                chatInput.addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                        sendMessage(e.target.value);
                        e.target.value = "";
                    }
                });

                chatHeader.addEventListener("click", function() {
                    chatBody.classList.toggle("open");
                });

                function handleChat(e, t) {
                    if (t != null) {
                        if (e.includes("/msg")) {
                            t?.msg && appendMessage(e.split("/")[2] + ": " + t.msg);
                        }
                    }
                }

                function setupMessageListener() {
                    try {
                        var liveGameController = reactHandler().stateNode.props.liveGameController;
                        if (liveGameController && liveGameController._liveApp && liveGameController._liveApp.database) {
                            var originalOnDataUpdate = liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;
                            liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) {
                                handleChat(e, t);
                                originalOnDataUpdate(e, t, a, n);
                            };
                            appendMessage("Lobbychat successfully loaded!");
                        } else {
                            appendMessage("Make sure you're in a game!");
                        }
                    } catch (error) {
                        appendMessage("Error setting up message listener: " + error.message);
                    }
                }

                setupMessageListener();

                return container;
            })())
        }],
        alerts: [{
            element: l("div", {
                className: "alertContainer",
                style: {
                    margin: "15px 15px 5px 15px",
                    backgroundColor: "rgb(0 0 0 / 50%)",
                    width: "95%",
                    height: "370px",
                    borderRadius: "7px",
                    display: "block",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }, l("ul", {
                className: "alertList",
                style: {
                    margin: "10px 10px 0 10px",
                    padding: "0",
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column-reverse",
                    height: "355px",
                    overflowY: "scroll",
                    wordWrap: "break-word"
                }
            }, l("li", {
                style: {
                    margin: "5px"
                }
            }, l("span", {
                style: {
                    color: "var(--textColor)"
                },
                innerText: "[LOG] GUI opened"
            })))),
            addLog(e, t) {
                return this.element.firstChild.prepend(l("li", {
                    style: {
                        margin: "5px"
                    }
                }, l("span", {
                    style: {
                        color: t || "var(--textColor)"
                    },
                    innerHTML: "[LOG] " + e
                })))
            },
            addAlert(e, t, a) {
                return this.element.firstChild.prepend(l("li", {
                    style: {
                        margin: "5px"
                    }
                }, l("strong", {}, e), " ", a))
            },
            connection: null,
            data: {},
            updateLeaderboard(e) {
                for (var {
                        blook: t,
                        name: a,
                        value: o
                    }
                    of(this.leaderboardEl || this.addLeaderboard(), this.leaderboard.innerHTML = "", e)) {
                    this.leaderboard.append(l("li", {
                        style: {
                            fontSize: "2rem",
                            paddingInline: "15px 15px",
                            paddingBlock: "1.25px",
                            position: "relative",
                            borderBottom: "2px solid orange",
                            color: (a === Object.values(document.querySelector("#app>div>div"))?.[1]?.children?.[0]?._owner?.stateNode?.props?.client?.name) ? "#00FF00" : "#FFFFFF"
                        }
                    }, a, l("span", {
                        innerText: this.parseNumber(parseInt(o)),
                        style: {
                            float: "right"
                        }
                    })))
                }
            },
            parseNumber(e = 0) {
                var t = e;
                if (e < 1e3)
                    return t.toString();
                var a = ["", "K", "M", "B", "T"],
                    o = Math.floor((e.toString().length - 1) / 3);
                if (o < a.length) {
                    let r = 0;
                    for (let i = 3; 1 <= i && !((r = parseFloat((0 !== o ? e / Math.pow(1e3, o) : e).toPrecision(i))).toString().replace(/[^a-zA-Z 0-9]+/g, "").length <= 3); i--);
                    t = (r = r % 1 != 0 ? r.toFixed(1) : r) + a[o]
                } else {
                    let n = e,
                        s = 0;
                    for (; 100 <= n; s++)
                        n = Math.floor(n / 10);
                    let l = "";
                    var c = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                    for (let d of (s + 1).toString().split(""))
                        l += c[Number(d)];
                    t = n / 10 + " \xd7 10" + l
                }
                return t
            },
            addLeaderboard() {
                this.leaderboardEl = l("div", {
                    className: "alertContainer",
                    style: {
                        margin: "15px 15px 5px 15px",
                        backgroundColor: "rgb(0 0 0 / 50%)",
                        width: "95%",
                        height: "370px",
                        borderRadius: "7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }, this.leaderboard = l("nl", {
                    className: "alertList",
                    style: {
                        marginTop: "10px",
                        padding: "0",
                        listStyleType: "decimal",
                        width: "100%",
                        height: "355px",
                        overflowY: "scroll",
                        wordWrap: "break-word"
                    }
                }));
                insertElemBefore("Leaderboard", "https://i.ibb.co/hZQjjVP/trophy-icon.webp", [{
                    element: this.leaderboardEl
                }], !0, h.children[3]);
                this.addLog("Leaderboard Loaded!");
            },
            async connect() {
                try {
                    var e = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                    if (!e?.props?.liveGameController?._liveGameCode)
                        return !1;
                    this.connection = await e.props.liveGameController.getDatabaseRef("");
                    let t = "Cow",
                        a = this.getGamemode(),
                        o = {
                            lb: "Lunch Break",
                            as: "Ad Spam",
                            e37: "Error 37",
                            nt: "Night Time",
                            lo: "#LOL",
                            j: "Jokester",
                            sm: "Slow Mo",
                            dp: "Dance Party",
                            v: "Vortex",
                            r: "Reverse",
                            f: "Flip",
                            m: "Micro"
                        };
                    this.connection.on("value", e => {
                        var r = e.val()?.c || {};
                        if (r && this.diffObjects(this.data, r)) {
                            var i,
                                n,
                                s,
                                l,
                                c,
                                d,
                                p,
                                u,
                                h = this.diffObjects(this.data, r);
                            this.data = r;
                            let m = [];
                            switch (this.getGamemode()) {
                                case "pirate":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        d: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "racing":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        pr: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "classic":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        p: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "royale":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        e: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "toy":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        t: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "brawl":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        xp: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "defense":
                                case "defense2":
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        d: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "gold":
                                case "candy":
                                    for (let $ in h)
                                        h[$].tat?.split && ([i, n] = h[$].tat.split(":"), "swap" == n ? this.addAlert($, t[r[$].b]?.url, "just swapped with " + i) : this.addAlert($, t[r[$].b]?.url, `just took ${this.parseNumber(parseInt(n))} gold from ` + i));
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        g: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "hack":
                                    for (let g in h)
                                        h[g].tat?.split && ([s, l] = h[g].tat.split(":"), this.addAlert(g, t[r[g].b]?.url, `just took ${this.parseNumber(parseInt(l))} crypto from ` + s));
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        cr: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "fish":
                                    for (let y in h)
                                        "Frenzy" == h[y].f ? this.addAlert(y, t[r[y].b]?.url, "just started a frenzy") : h[y].s && this.addAlert(y, t[r[y].b]?.url, `just sent a ${h[y].f} distraction`);
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        w: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "dino":
                                    for (let b in h)
                                        h[b].tat && ([c, d] = h[b].tat.split(":"), "true" == d ? this.addAlert(b, t[r[b].b]?.url, `just caught ${c} CHEATING!`) : this.addAlert(b, t[r[b].b]?.url, "investigated " + c));
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        f: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "cafe":
                                    for (let v in h)
                                        h[v].up && ([p, u] = h[v].up.split(":"), u) && this.addAlert(v, t[r[v].b]?.url, `upgraded ${p} to level ` + u);
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        ca: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }));
                                    break;
                                case "factory":
                                    for (let _ in h) {
                                        var f,
                                            w,
                                            k = h[_];
                                        k.g ? this.addAlert(_, t[r[_].b]?.url, `activated the ${o[k.g]} glitch!`) : k.s ? ([f, w] = k.s.split("-"), this.addAlert(_, t[r[_].b]?.url, `has a ${f} ${w} synergy!`)) : k.t && this.addAlert(_, t[r[_].b]?.url, "now has 10 Blooks!")
                                    }
                                    m = Object.entries(r).map(([e, {
                                        b: t,
                                        ca: a
                                    }]) => ({
                                        name: e,
                                        blook: t,
                                        value: a || 0
                                    }))
                            }
                            this.updateLeaderboard(m.sort((e, t) => t.value - e.value));
                        }
                    })
                } catch {
                    return !1
                }
            },
            diffObjects(e, t) {
                var a,
                    o = {};
                for (let r in e)
                    r in t && ("object" == typeof e[r] && "object" == typeof t[r] ? (a = this.diffObjects(e[r], t[r])) && 0 !== Object.keys(a).length && (o[r] = a) : JSON.stringify(e[r]) !== JSON.stringify(t[r]) && (o[r] = t[r]));
                for (let i in t)
                    i in e || (o[i] = t[i]);
                return 0 == Object.keys(o).length ? null : o
            },
            getGamemode() {
                if (Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.props?.client?.type) {
                    return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.props.client.type.toLowerCase();
                }
                switch (window.location.pathname) {
                    case "/play/racing":
                        return "racing";
                    case "/play/extras":
                        return "extras";
                    case "/play/host":
                        return "host";
                    case "/play/pirate":
                        return "voyage";
                    case "/play/factory":
                        return "factory";
                    case "/play/classic/get-ready":
                    case "/play/classic/question":
                    case "/play/classic/answer/sent":
                    case "/play/classic/answer/result":
                    case "/play/classic/standings":
                        return "classic";
                    case "/play/battle-royale/match/preview":
                    case "/play/battle-royale/question":
                    case "/play/battle-royale/answer/sent":
                    case "/play/battle-royale/answer/result":
                    case "/play/battle-royale/match/result":
                        return "royale";
                    case "/play/toy":
                        return "toy";
                    case "/play/gold":
                        return "gold";
                    case "/play/brawl":
                        return "brawl";
                    case "/play/hack":
                        return "hack";
                    case "/play/fishing":
                        return "Fish";
                    case "/play/rush":
                        return "rush";
                    case "/play/dino":
                        return "dino";
                    case "/tower/map":
                    case "/tower/battle":
                    case "/tower/rest":
                    case "/tower/risk":
                    case "/tower/shop":
                    case "/tower/victory":
                        return "doom";
                    case "/cafe":
                    case "/cafe/shop":
                        return "cafe";
                    case "/defense":
                        return "defense";
                    case "/play/defense2":
                        return "defense2";
                    case "/kingdom":
                        return "kingdom";
                    default:
                        return !1
                }
            }
        }]
    };

    function S(e, t) {
        var a,
            o,
            r = 0,
            i = 0;
        e.onpointerdown = function(e = window.event) {
            r = e.clientX,
                i = e.clientY,
                document.onpointerup = function() {
                    document.onpointerup = null,
                        document.onpointermove = null
                },
                document.onpointermove = function(e = window.event) {
                    a = r - e.clientX,
                        o = i - e.clientY,
                        r = e.clientX,
                        i = e.clientY,
                        t.style.top = t.offsetTop - o + "px",
                        t.style.left = t.offsetLeft - a + "px"
                }
        }
    }
    w("Alerts", "https://i.ibb.co/hBNyCXG/559343-1.png", C.alerts, !0),
        w("Global", "https://i.ibb.co/gd4Qs8L/11507ef5615c554fe88fc22c86768501-simple-earth-icon-1.webp", C.global)(),
        w("Host", "https://i.ibb.co/QpDgysb/computer-1865273-1.png", C.host, !0),
        w('<span style="font-size: 18px">Pirate\'s Voyage</span>', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnIGlkPSJCb2F0Ij48cGF0aCBkPSJNMTcwLjQsNTYuMDU0Yy02OC43ODgsMTAuMTc0IC0xMTUuOTcxLDU2LjkzOCAtMTQ1LjQxMSwxMzMuNzVsMTUuNDY5LDcuNzM0YzMwLjk2MiwtMjguMTc1IDc0LjcwNSwtMzcuNzg3IDEzMi4zMjIsLTI3LjI1bDAsLTE3LjYxMWMtMjUuNjI5LC0yNy45NTIgLTI2Ljk2NiwtNTYuNzcyIDAuNzE0LC04Ni42MjhsLTMuMDk0LC05Ljk5NVoiIHN0eWxlPSJmaWxsOiNmNmUwYmQ7Ii8+PHBhdGggZD0iTTE5OS42NzMsNjAuODEzYzMyLjc4NCw0Mi45ODIgNjUuODIyLDkwLjg4NyA5Ny4zMzcsMTM5LjU4MWwtNi42NjMsMGMtMTIuMDg1LC0zMS4xMTEgLTU3Ljg4MiwtMzkuNjk0IC05MS42MjYsLTI3LjI1YzIyLjUxNCwtMzQuNTc5IDE3Ljc5NiwtNzIuNjczIDAuOTUyLC0xMTIuMzMxWiIgc3R5bGU9ImZpbGw6I2Y2ZTBiZDsiLz48cGF0aCBkPSJNNjkuNDQ4LDE5Ny41MzhjMCwwIC01OS43MDcsLTE1LjI0MyAtNjguMzk4LC0xNy40NjJjLTAuMDc2LC0wLjAxOSAtMC4xNTQsMC4wMiAtMC4xODQsMC4wOTJjLTAuMDMsMC4wNzIgLTAuMDAyLDAuMTU1IDAuMDY1LDAuMTk1YzkuNjgyLDUuNzc1IDkxLjY0Nyw1NC42NTggOTEuNjQ3LDU0LjY1OGwtMjMuMTMsLTM3LjQ4M1oiIHN0eWxlPSJmaWxsOiM4ZDZlNDE7Ii8+PHBhdGggZD0iTTE2NC40NSw0Ny45MDNjMCwtNS4zNTMgNC4zNDYsLTkuNjk4IDkuNjk4LC05LjY5OGwxOS4zOTcsLTBjNS4zNTIsLTAgOS42OTgsNC4zNDUgOS42OTgsOS42OThsLTAsMTU2Ljk1M2MtMCw1LjM1MyAtNC4zNDYsOS42OTggLTkuNjk4LDkuNjk4bC0xOS4zOTcsMGMtNS4zNTIsMCAtOS42OTgsLTQuMzQ1IC05LjY5OCwtOS42OThsMCwtMTU2Ljk1M1oiIHN0eWxlPSJmaWxsOiM3ZjY4NDU7Ii8+PHBhdGggZD0iTTI2My45OTMsMjU2LjEwM2MyMi4xNzEsLTE0LjcxIDM2LjAwNywtMzUuNTE1IDM2LjAwNywtNTguNTY1bC0yMzAuNTUyLDBjMCwyMy43MTMgMTQuNjQzLDQ1LjA1IDM3Ljk0LDU5LjgxOWM5Ljg3NSwtMy43MjkgMjAuMDQxLC0xMS4zMzQgMzAuNDYzLC0yMi4zMzZjMzIuODExLDM1LjQ1NSA2NC4wNjksMzUuOTQzIDkzLjcwOCwwYzYuODM4LDkuNjc3IDE3LjczNiwxNi42NDYgMzIuNDM0LDIxLjA4MloiIHN0eWxlPSJmaWxsOiNiNjkyNWY7Ii8+PC9nPjwvc3ZnPg==", C.voyage),
        w("Gold Quest", "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg", C.gold),
        w("Cafe", "https://i.ibb.co/t8pqdYL/hot-beverage-1.png", C.cafe),
        w("Crypto Hack", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg", C.crypto),
        w('<span style="font-size: 17px">Deceptive Dinos</span>', "https://i.ibb.co/JFq5j88/Screenshot-2024-03-26-7-30-21-PM-removebg-preview-1.png", C.dinos),
        w('<span style="font-size: 18px">Tower Defense</span>', ['<img style="width: 30px; margin-right: 5px" src="https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg">'], C.defense),
        w('<span style="font-size: 16px">Tower Defense 2</span>', ['<img style="width: 30px; margin-right: 5px; rotate: 45deg" src="https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg">'], C.defense2),
        w("Factory", "https://i.ibb.co/VMrTd39/images-removebg-preview-1.png", C.factory),
        w('<span style="font-size: 19px">Fishing Frenzy</span>', "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg", C.fishing),
        w("Flappy Blook", "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg", C.flappy),
        w('<span style="font-size: 17px">Tower of Doom</span>', ['<img style="height: 30px; margin-left: 5px; margin-right: 10px" src="https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg">'], C.doom),
        w('<span style="font-size: 18px">Crazy Kingdom</span>', "https://i.ibb.co/10mZ6dx/3763864-1.png", C.kingdom),
        w("Racing", "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg", C.racing),
        w("Battle Royale", "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg", C.royale),
        w("Blook Rush", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7YSURBVHic7Z17tFxVfcc/e59zZib3kcfN456YQObOTB43PBIKoeIqSlwIBXwiCCytXe2qxabSWrAqLKmwXKthVRe2BFxitYpasSIPV0sI8mhV5GHVdpWaoCRIvAnZSW/uzeuG3Nec/jFzk8mYOXNm73PmeT7/zt6/s+/d399vv/cWnufRSSilZgEXAZcBl42MHF5m23KrlPJBKcU9mUx6pLElrC+iEwSglFpOscIpVH5q5rfh4YPH0wkBlmUNW5b8oZTyi9ls+ol6l7XetKUAyrz8ciBbKW2pAMqRUk62e3RoGwH4ebkffgIopV2jQ8sKoOjl6zlR6RW93I+gAiinGB22SSkfklJsatXo0FICUEqt4ESFv4WAXu6HrgBKKYkOPypGh+8bG60TTS0ApVQXJ3t5JuxvhCGAcorR4aVidLg7k0kPh/6RkGg6AUTh5X5EIYBSmj06NFwA9fByP6IWQDnNFh0aIgCl1EpO9vJk3QtRpN4CKKUYHfYXo8O92Wx6S93LUA8BFL38rZyo9IHIPxqQRgqgHCnlVEl02FSP6BCZAIpefjmFCn8zDfRyP5pJAKWURIdnin2HSKJDaAJQSnVzclveNF7uR7MKoJyy6HBPJpPeF4ZdIwEopVZxosKb1sv9aBUBlFIWHb6UzaY3a9uqRQBFLy9ty9O6H24WWlEA5RSjwy+llA8X+w6Bo0NVASilBjlR4RfSgl5+KiY9eP6g4IWhad7Xf4Qu2VzzIboUo8NISXR41De9nwCUUpcAj4ddyEaxaxyeHhU8PQLPHBSMTQP7FoHwWDBrnPPnjXFd/yHW9kw0uqihkUolbsnlBjZW+t2ukl+GXJ66MunBcwcFT48WKv7loxUSeoLhoyk2H02xefd8HHuK5b2v8/sLj3DNosOtHh0svx+rCaDlKPXyHx0UHJ2u3cbklM3W0V62jvZy58tu20YHaAMBTOTh+UMBvFwXn+hw9cLD9FgtHR1aUwBDx4pePlpoy3W8XJfy6DD/eHQ4zDk94/UrSEi0hAAm8vDcjJePCLa/3ugSFfEE+4+meOxoisd2z8dxCtHhkvmFvkMrRIemFcBvSrz8x3X2cl0mJ222jvSydaSXv9/uMr9rnHVzxri2/zDn9jZndGgaATStl+viCfaPpdgylmLLa80bHRoqgFIvf+aA4PV8I0sTLc0aHeoqgBkvf2qkUPE7Wt3LdSmPDvYUudmF6HBtnaND5ALYWdqWt7mX6zI5ZbNtpJdtI738w3aXvlnjrJtXiA7nRTyyiEwAvxiDP31J8kqnerkunmDkaIrHj6Z4vDjvsHHVHi7tC3uCo0BkU737JkRc+SEwOWXz6rgTmf2WnuuPMScWQIcTC6DDiQXQ4cQC6HBiAXQ4sQA6nFgAHU4sgA4nFkCHEwugw4kF0OHEAuhwYgF0OLEAOpxqAtDei2sL3Zwx5SQx2kY16fdjNQFob+mYazfHrtd2YFFCf0+8EOKw3+/VBKC9D2lu02w4b30WJ40ORRzw+zG6CBDdLqaO4w3JKZPsvjdgRBYBeq24HxAKAvodowhgJACjbZ1z4mbAGCHM9tELge8l1pEKIO4HmGNL44MUo34/VhPAEUD7RoR5sQCMSVjGAtjr96OvAFzX9YBdul+e68RDQVOSBgKQUk5mMmlfA0FmAod0CxA3AeZ02SYCEGNV0wSwoy2ABfFQ0Jg5tv4QUAjh2/5DxAI4o1s3Z8wMqw0OhwohVLU0kQpgTU/cBzDlonn6AzEhxM5qaYIIoKqRSmS7oMf3lroYP4TweNNsEwHwUrU0QQTwM90CSOCsHt3cMT3JSaPZVCnFg1XTVEvguu5e4BXdQsTNgD6ndx3TzlscAv5v1XQB7T2rW5A1cQTQZk2vvgAsSwaav4leAL1xBNBl/Tz9W0GklC8EShfQ3nO6BUmnYHY8IVQzQnqcP1t/CCileCRQuoD2XqSwLlAzgrgfoENvckJ7w6YQwhOCh4OkDfQN13WngUAh5VSc26ubs3PJdRu1/6OZTDrQIl4tItPuB7xzQRwBauUPFus/ZWNZ8hdB09ZFAIPdsKpLN3fnkXCmuNhsBjDw87S1COB5QNuVr1wUR4GgrOvT6m4dR0rxjcBpgyZ0XfcAsE2rRMB7FnrEWwSD8eElVRfxKmJZcjyTSQeevq+1o6ndDCxNwrrZurk7h57khNGzNJYlX60lfa0C+GGN6U/iyoVxM1CNCxf4nuOoipTyP2pKX6P9h4Gqu0wq8Y4FXrxV3A8BG5b6nuPwzy4EUopP15KnJgG4rnsEeKCmUpXQ58BF8+IoUIm+WcdIGxwCsW1reyaT9t0EWo7OZNNXNfIc5z0LTXK3N5cuNAv/ti3vqjWP1uPRSqmXgVzNGSk8GvHGn0n2NMsTOvsWNboEAFjWNM+8cYf2YxFSysnVq5cnas6n9TX4mmY+EhI+elrcDJRzqXvA6KUQx7F+oJNPVwD3gf6h9ev6PZa2xRPU4WBZ09w+sN/IhpTyFq18Oplc190FPKGTF8ARcRQo5YrFB0gZvE9s29ZwNpv+T528JlfE/JNBXq7p91iWMrHQHtjWNJ9Om3m/bVvf1M1rIoDvgf/JUz9sATeeHkeBdy0ZIWHg/UIIr9axfynaAnBddxz4lm5+gPcu9MjMMrHQ2jj2FJ9Ka/tQwYZjvZjJpA/p5je9JcyoGbAE3NTBUeDKJaPGz7ZZlnWHSX6teYBSlFI/B87RzZ8H1v9c8qtoXkWrToPmARL2FC9csMNoatyy5OuDg8uNdlqEcU/graYF+Gwu33EXFv51bq/xuojj2H9nWg7j/7vruo8CT5rYOH82/NnSzmkKzpp/iGsXmW36sG1rJJcbuM20LGE53k0YTAwBfGKZx+oOOE2cdCb58mDVQ7tVcRz7+hCKE44AXNf9Hww7hI6ATSvyOG29XOyxcdUeugyGfQCJhP3LbDb93TBKFGbT+ynAaDlrdTd8fFn7NgW/13+Atxls9oTCuN+2ratCKlJ4AigeIjUakgBsWOq15dax7tQEm1bsM7aTSNhPBjn0GZSwO993Ar8xMSApNAXd7XSvgPC4e/Vrxr1+KeWUZcn3hVOoos0wjbmuewz4pKmdZSm4baB9moK3LxnhPIOrXmZIJOwvZjJp/T1jpyCK4fe3MThGNsMHXI9r+ltfBKfPHmNjZtjYjm1bR6QUfxlCkU4idAEU7xa8MQxbn8t5XNzXuiLo6zrGw2fvDsWW49gfq3bnnw6RTMC5rvss8B1TO7aAL63yOK8FD5d2Jyf43toho5W+GRzHHspm0/eGUKzfIsoZ2I9S5ZrSIMyS8I0z8qxoobOFCXuKB9YOMdfgkscZpBR527beGUKxTm0/KsOu6+4BrsPg2ZkZ5trw7TPyvKEFtpFZ1jT3rRniNLM7/o+TTDofy2bT/x2KsVMQ6RqM67r/juFi0QyLkwURNPP1s0LkuevM3ZzZrX+0q5Rk0vl+Njvw+VCMVaAei3B3AP8WhqHlXYXmYFYzLh0Kj79ZtYc3zzGb6ZvBcay9liUvC8WYD5H/K4ujgg8Cr4Zh77xe+PKgR6qZRCA8PpLby1ULzVb4ZpBSTjmOfUEUvf7f+lbUHwBwXXcUuBoI5TjIW+d5PHJ2nv6aj0GEj5R5/nb1Lq43uNGjFCEgmXT+OJNJ/zoUg1Womx+5rvtTCiODUFjTA4+tyTf0QupUYpJ/Pmcn75gf3namRCJxfzabDnzBgynGW8JqRSn1TeD9Ydk7Og1//ivBlv2aE+2aW8IWdB/jwbN30Wf2oNNJOI796sqV2YHQDAagES3p9UDgS4yq0WXBVwY9NtRxR9FZ8w/xxO/sDLXyLUuOO471u6EZDEjdBeC67hhwFZr3Dp4KCdya9rhzuRf5hpJ3nzbMt87YE+o9B0IIL5Fwrsxk0ubrxTXSkL6067ovAR+gyru2tXJdv8e/nJmP5LEqIfN8cuVrfMbwDN+pSCadO7LZ9ObQDQeg7n2AUpRS76KwZhBqf373OHxiu+Cp0QBuGqAP0Nd1jLsG97AmpAmeUlKpxMZcbkDrYGcYNFQAAEqpy4GHgNAneh/5P8GtrwiG/eKMjwCkzHPtacPcvEz/1q5KFIZ7idtyuYHbQzdeSzkaLQAApdQlwCNA6AfFDk7B7b8W3L+3QjSoIIBls8e4d1CxJKQ5/VKEECSTzi253MDG0I3XWpZmEACAUmo98K9AJCP7Hx8UfHy74JXymdoyAdj2NH+V3csH+82ua6mEEIJUyrkx6jn+oDSNAACUUhcCm4FInpkYz8PnhwRf2CWYnPmzSwSwdsEhvrByL73mr3WeEiGEl0o5N2SzA/dE8gENmkoAAEqpC4AtQGR7g7eNwc07JC8cAvYtoic5wWdWKKP7eatRqPzE9dls+h8j+4gGTScAAKXUOuBxYF6U33lyRPDskMeGJeHM41eiWPl/lM2m74v0Qxo0pQAAlFLnULiGZn6U3xkerkvlvz+bTd8f6Yc0aaZF1ZNwXfe/gPVAXVbFokBKOZVKJa5q1sqHJhYAgOu6LwJrgab9B1bCceydqZSTzmbTDzW6LH40bRNQjlLqD4G7CXmEEHYTIITwkknnK7ncwIdCNRwRTR0BSnFd9z4KN5H8tNFlqYRlWWOpVOJtrVL50EICAHBddzvwJuCzGLxeEgWJhPOTZNJelM2mn2p0WWqhZZqAcpRSFwNfBxab2DFtAqQU+UTCuTmXGzC+rqURtKwAAJRSCyncXn6Frg0TATiOtc9x7LdkMumqr3Q3Ky0tgBmUUjdQaBZqXlHUEYAQkEg4312+PHN1zZmbjJbqA1TCdd1NwLkY3F8cFNu29qdSyXe3Q+VDm0SAUpRSVwCfA1YFSR80AliWnHAce2MYN3M1E20RAUopXlt3FnADYLx/qziufyCZdOa0W+VDG0aAUpRSc4GbgQ1UmECqFAGEEJ7j2D+xbXlNLe/wtRptLYAZlFJ9FCLCXwB9pb+VC6CwQ9f+gWXJP8lk0jvqV8rG0BECmEEp1UPhXMJNFOcPZgQgpcg7jv2oZckP1fryVivTUQKYQSmVpHBg9cOjo4dXOY79oJTiIybXrrcq/w99zo6mO4xCQAAAAABJRU5ErkJggg==", C.rush),
        w('<span style="font-size: 18px">Monster Brawl</span>', ['<img style="height: 28px; margin-left: 5px; margin-right: 8px" src="https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg">'], C.brawl),
        w('<span style="font-size: 15px">Santa\'s Workshop</span>', "https://i.ibb.co/Y2SFc9Y/Santa-Workshop-Finished-icon-1.webp", C.workshop),
        w("Chat", "https://i.ibb.co/5Bb7fX0/speech-bubble-xxl-1.webp", C.chat, !0),
        w("Extras", "https://i.ibb.co/mb0R9HX/Star-icon-stylized-svg-1-removebg-preview.png", C.extras, !0),
        w("Settings", "https://i.ibb.co/jrWKgyn/Windows-Settings-icon-1.png", C.settings, !0),
        w("Credits", "https://i.ibb.co/prKYGdN/credits.webp", C.credits, !0),
        S(m, _),
        S(g, _),
        window.addEventListener("keydown", A);
    let x = setInterval(() => {
        C.alerts[0].connection ? clearInterval(x) : C.alerts[0].connect()
    }, 5e3);

    function D() {
        for (let e in _.remove(), clearInterval(x), C)
            for (let t of C[e])
                t.enabled && t.run();
        Object.keys(C).forEach(e => C[e].forEach(e => e.enabled && (e.run(), k(...currentMode)))),
            window.removeEventListener("keydown", A)
    }

    function A(e) {
        var t = c.data.hide || {
                ctrl: !0,
                key: "e"
            },
            a = c.data.close || {
                ctrl: !0,
                key: "x"
            };
        (t.ctrl && e.ctrlKey || !t.ctrl && !e.ctrlKey) && (t.shift && e.shiftKey || !t.shift && !e.shiftKey) && (t.alt && e.altKey || !t.alt && !e.altKey) && e.key.toLowerCase() == t.key ? (e.preventDefault(), _.style.display = "block" === _.style.display ? "none" : "block") : (a.ctrl && e.ctrlKey || !a.ctrl && !e.ctrlKey) && (a.shift && e.shiftKey || !a.shift && !e.shiftKey) && (a.alt && e.altKey || !a.alt && !e.altKey) && e.key.toLowerCase() == a.key && (e.preventDefault(), D())
    }

    function B(e, t = window) {
        return new Promise(a => {
            let o = {},
                r,
                i,
                n,
                s,
                l = t => {
                    t.preventDefault(),
                        o[t.code] = !0,
                        r ||= t.shiftKey,
                        i ||= t.ctrlKey,
                        n ||= t.altKey,
                        ["shift", "control", "alt", "meta"].includes(t.key.toLowerCase()) || (s = t.key.toLowerCase()),
                        e?.({
                            shift: r,
                            ctrl: i,
                            alt: n,
                            key: s
                        })
                },
                c = e => {
                    delete o[e.code],
                        0 < Object.keys(o).length || (t.removeEventListener("keydown", l), t.removeEventListener("keyup", c), a({
                            shift: r,
                            ctrl: i,
                            alt: n,
                            key: s
                        }))
                };
            t.addEventListener("keydown", l),
                t.addEventListener("keyup", c)
        })
    };
    _.addEventListener("mousemove", e => {
            var t,
                a;
            "cheatName" != e.target.className && "scriptButton" != e.target.className ? "0" != y.style.opacity && (y.animate([{
                opacity: .9
            }, {
                opacity: 0
            }], {
                duration: 200
            }), y.style.opacity = "0") : (e = "scriptButton" == e.target.className ? e.target : e.target.parentElement, y.innerText == e.dataset.description && "0.9" == y.style.opacity || (t = e.getBoundingClientRect(), a = e.offsetParent.getBoundingClientRect(), y.innerText = e.dataset.description, "0" == y.style.opacity && (y.animate([{
                opacity: 0
            }, {
                opacity: .9
            }], {
                duration: 200
            }), y.style.opacity = "0.9"), y.style.left = t.x - a.x + (t.width - y.clientWidth) / 2 + "px", y.style.top = t.y - a.y + t.height + "px"))
        }),
        window.fetch.call = function() {
            if (!arguments[1].includes("s.blooket.com/rc"))
                return wfcall.apply(this, arguments);
            C.alerts?.[0].addLog("Blooket Cheat Report Blocked!")
        }
})();
