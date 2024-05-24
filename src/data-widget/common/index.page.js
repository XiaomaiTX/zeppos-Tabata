import * as hmUI from "@zos/ui";
import * as STYLE from "zosLoader:./index.page.[pf].layout.js";
import { TABATA_ANIM } from "./tabata.anim";
import * as zosSensor from "@zos/sensor";

const vibrator = new zosSensor.Vibrator()

DataWidget({
    init() {},

    build() {
        this.init();
        const title_img = hmUI.createWidget(hmUI.widget.IMG, STYLE.TITLE_IMG);
        const hr_img = hmUI.createWidget(hmUI.widget.IMG, STYLE.HR_IMG);
        const hr_text = hmUI.createWidget(hmUI.widget.TEXT, STYLE.HR_TEXT);
        const deliver_line = hmUI.createWidget(
            hmUI.widget.IMG,
            STYLE.DELIVER_LINE
        );
        const prompt_img = hmUI.createWidget(hmUI.widget.IMG, STYLE.PROMPT_IMG);
        const prompt_text = hmUI.createWidget(
            hmUI.widget.TEXT,
            STYLE.PROMPT_TEXT
        );
        const time_text = hmUI.createWidget(hmUI.widget.TEXT, STYLE.TIME_TEXT);
        const button = hmUI.createWidget(hmUI.widget.BUTTON, STYLE.BUTTON);
        console.log(1);
        const anim = new EasyAnimPlayer(
            {
                repeat: true,
                perTickTime: 1000,
            },
            TABATA_ANIM,
            (prop) => {
                vibrator.start()
                prompt_text.setProperty(hmUI.prop.MORE, {
                    ...STYLE.PROMPT_TEXT,
                    text: prop.text,
                    color: prop.color,
                });
            }
        );
        button.setProperty(hmUI.prop.MORE, {
            ...STYLE.BUTTON,
            click_func: () => {
                console.log("click");
                console.log(anim.status);
                if (anim.status == "start") {
                    anim.stop();
                } else {
                    anim.start();
                }
            },
        });
    },

    onInit() {},

    onDestroy() {},
});
class EasyAnimPlayer {
    constructor(animConfig, animProfile, callback) {
        console.log("init anim player");
        this.config = animConfig;
        this.profile = animProfile;
        this.callback = callback;
        this.status = "stop";
        this.timer = null;
        this.index = 0;
        this.time=0;
        console.log("inited");
    }
    start() {
        if (this.status == "stop" || this.status == "pause") {
            this.status = "start";
            this.timer = setInterval(() => {
                console.log("index"+this.index + "time" + this.time+" time" + this.profile[this.index].time);
                console.log();
                if (this.time == this.profile[this.index].time) {

                    this.callback({
                        text: this.profile[this.index].text,
                        color: this.profile[this.index].color,
                    });
                    this.index++;

                }
                this.time++
                if (this.time > this.profile[this.index].time && this.config.repeat) {
                    this.index = 0;
                    this.time = 0;
                }
                if (this.time > this.profile[this.index].time && !this.config.repeat) {
                    this.stop();
                }
            }, this.config.perTickTime);
        }
    }
    stop() {
        if (this.status == "start") {
            this.status = "stop";
            this.index = 0;
            this.time = 0;
            clearInterval(this.timer);
        }
    }

    pause() {
        if (this.status == "start") {
            this.status = "pause";
            clearInterval(this.timer);
        }
    }
    getStatus() {
        return this.status;
    }
}
