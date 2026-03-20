/************************ * Tentativeonline *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

let expName = 'tentativeonline';
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

const psychoJS = new PsychoJS({
  debug: true
});

psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});

psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);

const VR_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(VR_trialsLoopBegin(VR_trialsLoopScheduler));
flowScheduler.add(VR_trialsLoopScheduler);
flowScheduler.add(VR_trialsLoopEnd);

const LN_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LN_trialsLoopBegin(LN_trialsLoopScheduler));
flowScheduler.add(LN_trialsLoopScheduler);
flowScheduler.add(LN_trialsLoopEnd);

const ROT_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ROT_trialsLoopBegin(ROT_trialsLoopScheduler));
flowScheduler.add(ROT_trialsLoopScheduler);
flowScheduler.add(ROT_trialsLoopEnd);

const MX_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MX_trialsLoopBegin(MX_trialsLoopScheduler));
flowScheduler.add(MX_trialsLoopScheduler);
flowScheduler.add(MX_trialsLoopEnd);

flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

// --- SEZIONE RISORSE CORRETTA PER GITHUB ---
let resources = [
  { name: 'conditions_VR.csv', path: './resources/conditions_VR.csv' },
  { name: 'conditions_LN.csv', path: './resources/conditions_LN.csv' },
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
  { name: 'conditions_MX.csv', path: './resources/conditions_MX.csv' },
  { name: 'default.png', path: './resources/images/image_3DR/fig11001.png' }
];

for (let i = 11001; i <= 11066; i++) {
  const imgPath = `images/image_3DR/fig${i}.png`;
  resources.push({ name: imgPath, path: `./resources/${imgPath}` });
}

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: resources
});
// --- FINE SEZIONE RISORSE ---

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;
  expInfo['date'] = util.MonotonicClock.getDateStr();
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0;
  util.addInfoFromUrl(expInfo);
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  return Scheduler.Event.NEXT;
}

var routine_VR_trialClock, text_box1, text_box2, text_box3, text_box4, text_box5, text_box6, text_box7, text_box8, question_text, option_1, option_2, option_3, option_4, option_5, option_6, option_7, option_8, mouse;
var routine_LN_trialsClock, text_box1_2, text_box2_2, text_box3_2, text_box4_2, text_box5_2, text_box6_2, text_box7_2, text_box8_2, question_text_2, option, option_9, option_10, option_11, option_12, option_13, option_14, option_15, mouse_4;
var routine_3DR_trialClock, rot_pol_1, rot_pol_2, rot_pol_3, rot_pol_4, rot_pol_5, rot_pol_6, rot_pol_7, rot_pol_8, ROT_Q, ROT_image, ROT_OPT_1, ROT_OPT_2, ROT_OPT_3, ROT_OPT_4, ROT_OPT_5, ROT_OPT_6, ROT_OPT_7, ROT_OPT_8, mouse_2;
var routine_MX_trialClock, MX_pol_1, MX_pol_2, MX_pol_3, MX_pol_4, MX_pol_5, MX_pol_6, MX_pol_7, MX_pol_8, MX_Q, MX_image, MX_OPT_1, MX_OPT_2, MX_OPT_3, MX_OPT_4, MX_OPT_5, MX_OPT_6, MX_OPT_7, MX_OPT_8, mouse_3;
var endClock, text, DataSavingClock, globalClock, routineTimer;

async function experimentInit() {
  routine_VR_trialClock = new util.Clock();
  text_box1 = new visual.Rect ({ win: psychoJS.window, name: 'text_box1', width: 0.33, height: 0.22, pos: [-0.55, -0.05], lineColor: new util.Color('black'), fillColor: new util.Color('white') });
  text_box2 = new visual.Rect ({ win: psychoJS.window, name: 'text_box2', width: 0.33, height: 0.22, pos: [-0.18, -0.05], lineColor: new util.Color('black'), fillColor: new util.Color('white') });
  text_box3 = new visual.Rect ({ win: psychoJS.window, name: 'text_box3', width: 0.33, height: 0.22, pos: [0.18, -0.05], lineColor: new util.Color('black'), fillColor: new util.Color('white') });
  text_box4 = new visual.Rect ({ win: psychoJS.window, name: 'text_box4', width: 0.33, height: 0.22, pos: [0.55, -0.05], lineColor: new util.Color('black'), fillColor: new util.Color('white') });
  text_box5 = new visual.Rect ({ win: psychoJS.window, name: 'text_box5', width: 0.33, height: 0.22, pos: [-0.55, -0.28], lineColor: new util.Color('white'), fillColor: new util.Color('white') });
  text_box6 = new visual.Rect ({ win: psychoJS.window, name: 'text_box6', width: 0.33, height: 0.22, pos: [-0.18, -0.28], lineColor: new util.Color('black'), fillColor: new util.Color('white') });
  text_box7 = new visual.Rect ({ win: psychoJS.window, name: 'text_box7', width: 0.33, height: 0.22, pos: [0.18, -0.28], lineColor: new util.Color('white'), fillColor: new util.Color('white') });
  text_box8 = new visual.Rect ({ win: psychoJS.window, name: 'text_box8', width: 0.33, height: 0.22, pos: [0.55, -0.28], lineColor: new util.Color('black'), fillColor: new util.Color('white') });
  
  question_text = new visual.TextStim({ win: psychoJS.window, name: 'question_text', text: '', font: 'Arial Unicode MS', pos: [-0.35, 0.25], height: 0.04, color: new util.Color('white') });
  
  option_1 = new visual.TextStim({ win: psychoJS.window, name: 'option_1', text: '', pos: [-0.55, -0.05], height: 0.023, color: new util.Color('black') });
  option_2 = new visual.TextStim({ win: psychoJS.window, name: 'option_2', text: '', pos: [-0.18, -0.05], height: 0.023, color: new util.Color('black') });
  option_3 = new visual.TextStim({ win: psychoJS.window, name: 'option_3', text: '', pos: [0.18, -0.05], height: 0.023, color: new util.Color('black') });
  option_4 = new visual.TextStim({ win: psychoJS.window, name: 'option_4', text: '', pos: [0.55, -0.05], height: 0.023, color: new util.Color('black') });
  option_5 = new visual.TextStim({ win: psychoJS.window, name: 'option_5', text: '', pos: [-0.55, -0.28], height: 0.023, color: new util.Color('black') });
  option_6 = new visual.TextStim({ win: psychoJS.window, name: 'option_6', text: '', pos: [-0.18, -0.28], height: 0.023, color: new util.Color('black') });
  option_7 = new visual.TextStim({ win: psychoJS.window, name: 'option_7', text: '', pos: [0.18, -0.28], height: 0.023, color: new util.Color('black') });
  option_8 = new visual.TextStim({ win: psychoJS.window, name: 'option_8', text: '', pos: [0.55, -0.28], height: 0.023, color: new util.Color('black') });
  
  mouse = new core.Mouse({ win: psychoJS.window });
  
  routine_3DR_trialClock = new util.Clock();
  ROT_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ROT_image', 
    image : 'default.png', 
    pos : [0, 0.25],
    size : [0.8, 0.4]
  });

  ROT_Q = new visual.TextStim({ win: psychoJS.window, name: 'ROT_Q', text: '', font: 'Arial Unicode MS', pos: [-0.35, 0.35], height: 0.04, color: new util.Color('white') });
  
  globalClock = new util.Clock();
  routineTimer = new util.CountdownTimer();
  return Scheduler.Event.NEXT;
}

// Funzioni di supporto minime per non rompere il caricamento
function VR_trialsLoopBegin(scheduler) { return async function() { return Scheduler.Event.NEXT; } }
function VR_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function LN_trialsLoopBegin(scheduler) { return async function() { return Scheduler.Event.NEXT; } }
function LN_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function ROT_trialsLoopBegin(scheduler) { return async function() { return Scheduler.Event.NEXT; } }
function ROT_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function MX_trialsLoopBegin(scheduler) { return async function() { return Scheduler.Event.NEXT; } }
function MX_trialsLoopEnd() { return Scheduler.Event.NEXT; }
function endRoutineBegin() { return function() { return Scheduler.Event.NEXT; } }
function endRoutineEachFrame() { return function() { return Scheduler.Event.NEXT; } }
function endRoutineEnd() { return Scheduler.Event.NEXT; }

async function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  return Scheduler.Event.QUIT;
}
