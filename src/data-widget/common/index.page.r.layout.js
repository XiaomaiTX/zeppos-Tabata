import * as hmUI from "@zos/ui";
import { px } from "@zos/utils";

export const TITLE_IMG = {
    x: px(124),
    y: px(63),
    src: "Tabata.png",
};

export const HR_IMG = {
    x: px(180),
    y: px(157),
    src: "activity.png",
};

export const HR_TEXT = {
    x: px(112),
    y: px(193),
    w: px(106),
    h: px(94),
    color: 0xff00000,
    text_size: px(72),
    font: "YSBTH.ttf",
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: "86",
};

export const DELIVER_LINE = {
    x: px(238),
    y: px(140),
    src: "deliver_line.png",
};

export const PROMPT_IMG = {
    x: px(284),
    y: px(157),
    src: "flag.png",
};
export const PROMPT_TEXT = {
    x: px(260),
    y: px(199),
    w: px(220),
    h: px(83),
    color: 0xffffff,
    text_size: px(64),
    font: "YSBTH.ttf",
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: "GO",
};
export const TIME_TEXT = {
    x: px(0),
    y: px(302),
    w: px(480),
    h: px(47),
    color: 0x9e9e9e,
    text_size: px(36),
    font: "YSBTH.ttf",
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: "11'22''00",
};
export const BUTTON = {
    x: px(0),
    y: px(388),
    text: "",
    w: -1,
    h: -1,
    normal_src: "button_play.png",
    press_src: "button_play_press.png",
};
