/*********************** 
 * Tentaiveonline *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'tentaiveonline';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
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
flowScheduler.add(DataSavingRoutineBegin());
flowScheduler.add(DataSavingRoutineEachFrame());
flowScheduler.add(DataSavingRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var routine_VR_trialClock;
var text_box1;
var text_box2;
var text_box3;
var text_box4;
var text_box5;
var text_box6;
var text_box7;
var text_box8;
var question_text;
var option_1;
var option_2;
var option_3;
var option_4;
var option_5;
var option_6;
var option_7;
var option_8;
var mouse;
var routine_LN_trialsClock;
var text_box1_2;
var text_box2_2;
var text_box3_2;
var text_box4_2;
var text_box5_2;
var text_box6_2;
var text_box7_2;
var text_box8_2;
var question_text_2;
var option;
var option_9;
var option_10;
var option_11;
var option_12;
var option_13;
var option_14;
var option_15;
var mouse_4;
var routine_3DR_trialClock;
var rot_pol_1;
var rot_pol_2;
var rot_pol_3;
var rot_pol_4;
var rot_pol_5;
var rot_pol_6;
var rot_pol_7;
var rot_pol_8;
var ROT_Q;
var ROT_image;
var ROT_OPT_1;
var ROT_OPT_2;
var ROT_OPT_3;
var ROT_OPT_4;
var ROT_OPT_5;
var ROT_OPT_6;
var ROT_OPT_7;
var ROT_OPT_8;
var mouse_2;
var routine_MX_trialClock;
var MX_pol_1;
var MX_pol_2;
var MX_pol_3;
var MX_pol_4;
var MX_pol_5;
var MX_pol_6;
var MX_pol_7;
var MX_pol_8;
var MX_Q;
var MX_image;
var MX_OPT_1;
var MX_OPT_2;
var MX_OPT_3;
var MX_OPT_4;
var MX_OPT_5;
var MX_OPT_6;
var MX_OPT_7;
var MX_OPT_8;
var mouse_3;
var endClock;
var text;
var DataSavingClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "routine_VR_trial"
  routine_VR_trialClock = new util.Clock();
  text_box1 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box1', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.55), (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_box2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.18), (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_box3 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box3', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.18, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  text_box4 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box4', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.55, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  text_box5 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box5', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.55), (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  text_box6 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box6', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.18), (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  text_box7 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box7', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.18, (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  text_box8 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box8', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.55, (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: '',
    font: 'Arial Unicode MS',
    units: 'height', 
    pos: [(- 0.35), 0.25], draggable: false, height: 0.04,  wrapWidth: 0.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  option_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_1',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.55), (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  option_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_2',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.18), (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.33, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  option_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_3',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.18, (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  option_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_4',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.55, (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  option_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_5',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.55), (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  option_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_6',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.18), (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  option_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_7',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.18, (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  option_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_8',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.55, (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "routine_LN_trials"
  routine_LN_trialsClock = new util.Clock();
  text_box1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box1_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.55), (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_box2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box2_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.18), (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_box3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box3_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.18, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  text_box4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box4_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.55, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  text_box5_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box5_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.55), (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  text_box6_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box6_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [(- 0.18), (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  text_box7_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box7_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.18, (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  text_box8_2 = new visual.Rect ({
    win: psychoJS.window, name: 'text_box8_2', 
    width: [0.33, 0.22][0], height: [0.33, 0.22][1],
    ori: 0.0, 
    pos: [0.55, (- 0.28)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  question_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text_2',
    text: '',
    font: 'Arial Unicode MS',
    units: 'height', 
    pos: [(- 0.35), 0.25], draggable: false, height: 0.04,  wrapWidth: 0.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  option = new visual.TextStim({
    win: psychoJS.window,
    name: 'option',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.55), (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  option_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_9',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.18), (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.33, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  option_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_10',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.18, (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  option_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_11',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.55, (- 0.05)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  option_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_12',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.55), (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  option_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_13',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.18), (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  option_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_14',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.18, (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  option_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option_15',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.55, (- 0.28)], draggable: false, height: 0.023,  wrapWidth: 0.29, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "routine_3DR_trial"
  routine_3DR_trialClock = new util.Clock();
  rot_pol_1 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_1', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.45), (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  rot_pol_2 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_2', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.15), (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  rot_pol_3 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_3', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.15, (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  rot_pol_4 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_4', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.45, (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  rot_pol_5 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_5', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.45), (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  rot_pol_6 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_6', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.15), (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  rot_pol_7 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_7', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.15, (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  rot_pol_8 = new visual.Rect ({
    win: psychoJS.window, name: 'rot_pol_8', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.45, (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  ROT_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_Q',
    text: '',
    font: 'Arial Unicode MS',
    units: 'height', 
    pos: [(- 0.35), 0.35], draggable: false, height: 0.04,  wrapWidth: 0.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  ROT_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ROT_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.8, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  ROT_OPT_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_1',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.45), (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  ROT_OPT_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_2',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.15), (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  ROT_OPT_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_3',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.15, (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  ROT_OPT_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_4',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.45, (- 0.22)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  ROT_OPT_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_5',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.45), (- 0.37)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  ROT_OPT_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_6',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.15), (- 0.37)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  ROT_OPT_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_7',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.15, (- 0.37)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  ROT_OPT_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ROT_OPT_8',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.45, (- 0.37)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -17.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "routine_MX_trial"
  routine_MX_trialClock = new util.Clock();
  MX_pol_1 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_1', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.45), (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  MX_pol_2 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_2', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.15), (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  MX_pol_3 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_3', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.15, (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  MX_pol_4 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_4', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.45, (- 0.22)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  MX_pol_5 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_5', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.45), (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  MX_pol_6 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_6', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.15), (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  MX_pol_7 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_7', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.15, (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  MX_pol_8 = new visual.Rect ({
    win: psychoJS.window, name: 'MX_pol_8', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, 
    pos: [0.45, (- 0.37)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  MX_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_Q',
    text: '',
    font: 'Arial Unicode MS',
    units: 'height', 
    pos: [(- 0.35), 0.4], draggable: false, height: 0.04,  wrapWidth: 0.6, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  MX_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MX_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-center',
    ori : 0.0, 
    pos : [0, 0.32], 
    draggable: false,
    size : [0.8, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  MX_OPT_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_1',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.45), (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  MX_OPT_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_2',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.15), (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  MX_OPT_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_3',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.15, (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  MX_OPT_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_4',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.45, (- 0.22)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  MX_OPT_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_5',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.45), (- 0.37)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  MX_OPT_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_6',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [(- 0.15), (- 0.37)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  MX_OPT_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_7',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.15, (- 0.37)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  MX_OPT_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MX_OPT_8',
    text: '',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0.45, (- 0.37)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -17.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'ありがとうございます。',
    font: 'Arial Unicode MS',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "DataSaving"
  DataSavingClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var VR_trials;
function VR_trialsLoopBegin(VR_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    VR_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_VR.csv', (Math.random(4) * 16)),
      seed: 4, name: 'VR_trials'
    });
    psychoJS.experiment.addLoop(VR_trials); // add the loop to the experiment
    currentLoop = VR_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisVR_trial of VR_trials) {
      snapshot = VR_trials.getSnapshot();
      VR_trialsLoopScheduler.add(importConditions(snapshot));
      VR_trialsLoopScheduler.add(routine_VR_trialRoutineBegin(snapshot));
      VR_trialsLoopScheduler.add(routine_VR_trialRoutineEachFrame());
      VR_trialsLoopScheduler.add(routine_VR_trialRoutineEnd(snapshot));
      VR_trialsLoopScheduler.add(VR_trialsLoopEndIteration(VR_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function VR_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(VR_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function VR_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var LN_trials;
function LN_trialsLoopBegin(LN_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    LN_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_LN.csv', (Math.random(4) * 9)),
      seed: 4, name: 'LN_trials'
    });
    psychoJS.experiment.addLoop(LN_trials); // add the loop to the experiment
    currentLoop = LN_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLN_trial of LN_trials) {
      snapshot = LN_trials.getSnapshot();
      LN_trialsLoopScheduler.add(importConditions(snapshot));
      LN_trialsLoopScheduler.add(routine_LN_trialsRoutineBegin(snapshot));
      LN_trialsLoopScheduler.add(routine_LN_trialsRoutineEachFrame());
      LN_trialsLoopScheduler.add(routine_LN_trialsRoutineEnd(snapshot));
      LN_trialsLoopScheduler.add(LN_trialsLoopEndIteration(LN_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function LN_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(LN_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function LN_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ROT_trials;
function ROT_trialsLoopBegin(ROT_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ROT_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_3DR.csv', (Math.random(4) * 66)),
      seed: 4, name: 'ROT_trials'
    });
    psychoJS.experiment.addLoop(ROT_trials); // add the loop to the experiment
    currentLoop = ROT_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisROT_trial of ROT_trials) {
      snapshot = ROT_trials.getSnapshot();
      ROT_trialsLoopScheduler.add(importConditions(snapshot));
      ROT_trialsLoopScheduler.add(routine_3DR_trialRoutineBegin(snapshot));
      ROT_trialsLoopScheduler.add(routine_3DR_trialRoutineEachFrame());
      ROT_trialsLoopScheduler.add(routine_3DR_trialRoutineEnd(snapshot));
      ROT_trialsLoopScheduler.add(ROT_trialsLoopEndIteration(ROT_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function ROT_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ROT_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ROT_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var MX_trials;
function MX_trialsLoopBegin(MX_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    MX_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_MX.csv', (Math.random(4) * 11)),
      seed: 4, name: 'MX_trials'
    });
    psychoJS.experiment.addLoop(MX_trials); // add the loop to the experiment
    currentLoop = MX_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMX_trial of MX_trials) {
      snapshot = MX_trials.getSnapshot();
      MX_trialsLoopScheduler.add(importConditions(snapshot));
      MX_trialsLoopScheduler.add(routine_MX_trialRoutineBegin(snapshot));
      MX_trialsLoopScheduler.add(routine_MX_trialRoutineEachFrame());
      MX_trialsLoopScheduler.add(routine_MX_trialRoutineEnd(snapshot));
      MX_trialsLoopScheduler.add(MX_trialsLoopEndIteration(MX_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function MX_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(MX_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function MX_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var routine_VR_trialMaxDurationReached;
var gotValidClick;
var routine_VR_trialMaxDuration;
var routine_VR_trialComponents;
function routine_VR_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_VR_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    routine_VR_trialClock.reset();
    routineTimer.reset();
    routine_VR_trialMaxDurationReached = false;
    // update component parameters for each repeat
    question_text.setText(QUESTION.replace("\\n", "\n"));
    option_1.setText(choice1.toString().replace(".0", ""));
    option_2.setText(choice2.toString().replace(".0", ""));
    option_3.setText(choice3.toString().replace(".0", ""));
    option_4.setText(choice4.toString().replace(".0", ""));
    option_5.setText(choice5.toString().replace(".0", ""));
    option_6.setText(choice6.toString().replace(".0", ""));
    option_7.setText(choice7.toString().replace(".0", ""));
    option_8.setText(choice8.toString().replace(".0", ""));
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.corr = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('routine_VR_trial.started', globalClock.getTime());
    routine_VR_trialMaxDuration = null
    // keep track of which components have finished
    routine_VR_trialComponents = [];
    routine_VR_trialComponents.push(text_box1);
    routine_VR_trialComponents.push(text_box2);
    routine_VR_trialComponents.push(text_box3);
    routine_VR_trialComponents.push(text_box4);
    routine_VR_trialComponents.push(text_box5);
    routine_VR_trialComponents.push(text_box6);
    routine_VR_trialComponents.push(text_box7);
    routine_VR_trialComponents.push(text_box8);
    routine_VR_trialComponents.push(question_text);
    routine_VR_trialComponents.push(option_1);
    routine_VR_trialComponents.push(option_2);
    routine_VR_trialComponents.push(option_3);
    routine_VR_trialComponents.push(option_4);
    routine_VR_trialComponents.push(option_5);
    routine_VR_trialComponents.push(option_6);
    routine_VR_trialComponents.push(option_7);
    routine_VR_trialComponents.push(option_8);
    routine_VR_trialComponents.push(mouse);
    
    for (const thisComponent of routine_VR_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var corr;
var corrAns;
var _mouseXYs;
function routine_VR_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_VR_trial' ---
    // get current time
    t = routine_VR_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_box1* updates
    if (t >= 0.0 && text_box1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box1.tStart = t;  // (not accounting for frame time here)
      text_box1.frameNStart = frameN;  // exact frame index
      
      text_box1.setAutoDraw(true);
    }
    
    
    // if text_box1 is active this frame...
    if (text_box1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box2* updates
    if (t >= 0.0 && text_box2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box2.tStart = t;  // (not accounting for frame time here)
      text_box2.frameNStart = frameN;  // exact frame index
      
      text_box2.setAutoDraw(true);
    }
    
    
    // if text_box2 is active this frame...
    if (text_box2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box3* updates
    if (t >= 0.0 && text_box3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box3.tStart = t;  // (not accounting for frame time here)
      text_box3.frameNStart = frameN;  // exact frame index
      
      text_box3.setAutoDraw(true);
    }
    
    
    // if text_box3 is active this frame...
    if (text_box3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box4* updates
    if (t >= 0.0 && text_box4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box4.tStart = t;  // (not accounting for frame time here)
      text_box4.frameNStart = frameN;  // exact frame index
      
      text_box4.setAutoDraw(true);
    }
    
    
    // if text_box4 is active this frame...
    if (text_box4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box5* updates
    if (t >= 0.0 && text_box5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box5.tStart = t;  // (not accounting for frame time here)
      text_box5.frameNStart = frameN;  // exact frame index
      
      text_box5.setAutoDraw(true);
    }
    
    
    // if text_box5 is active this frame...
    if (text_box5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box6* updates
    if (t >= 0.0 && text_box6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box6.tStart = t;  // (not accounting for frame time here)
      text_box6.frameNStart = frameN;  // exact frame index
      
      text_box6.setAutoDraw(true);
    }
    
    
    // if text_box6 is active this frame...
    if (text_box6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box7* updates
    if (t >= 0.0 && text_box7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box7.tStart = t;  // (not accounting for frame time here)
      text_box7.frameNStart = frameN;  // exact frame index
      
      text_box7.setAutoDraw(true);
    }
    
    
    // if text_box7 is active this frame...
    if (text_box7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box8* updates
    if (t >= 0.0 && text_box8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box8.tStart = t;  // (not accounting for frame time here)
      text_box8.frameNStart = frameN;  // exact frame index
      
      text_box8.setAutoDraw(true);
    }
    
    
    // if text_box8 is active this frame...
    if (text_box8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }
    
    
    // if question_text is active this frame...
    if (question_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_1* updates
    if (t >= 0.0 && option_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_1.tStart = t;  // (not accounting for frame time here)
      option_1.frameNStart = frameN;  // exact frame index
      
      option_1.setAutoDraw(true);
    }
    
    
    // if option_1 is active this frame...
    if (option_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_2* updates
    if (t >= 0.0 && option_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_2.tStart = t;  // (not accounting for frame time here)
      option_2.frameNStart = frameN;  // exact frame index
      
      option_2.setAutoDraw(true);
    }
    
    
    // if option_2 is active this frame...
    if (option_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_3* updates
    if (t >= 0.0 && option_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_3.tStart = t;  // (not accounting for frame time here)
      option_3.frameNStart = frameN;  // exact frame index
      
      option_3.setAutoDraw(true);
    }
    
    
    // if option_3 is active this frame...
    if (option_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_4* updates
    if (t >= 0.0 && option_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_4.tStart = t;  // (not accounting for frame time here)
      option_4.frameNStart = frameN;  // exact frame index
      
      option_4.setAutoDraw(true);
    }
    
    
    // if option_4 is active this frame...
    if (option_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_5* updates
    if (t >= 0.0 && option_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_5.tStart = t;  // (not accounting for frame time here)
      option_5.frameNStart = frameN;  // exact frame index
      
      option_5.setAutoDraw(true);
    }
    
    
    // if option_5 is active this frame...
    if (option_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_6* updates
    if (t >= 0.0 && option_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_6.tStart = t;  // (not accounting for frame time here)
      option_6.frameNStart = frameN;  // exact frame index
      
      option_6.setAutoDraw(true);
    }
    
    
    // if option_6 is active this frame...
    if (option_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_7* updates
    if (t >= 0.0 && option_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_7.tStart = t;  // (not accounting for frame time here)
      option_7.frameNStart = frameN;  // exact frame index
      
      option_7.setAutoDraw(true);
    }
    
    
    // if option_7 is active this frame...
    if (option_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_8* updates
    if (t >= 0.0 && option_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_8.tStart = t;  // (not accounting for frame time here)
      option_8.frameNStart = frameN;  // exact frame index
      
      option_8.setAutoDraw(true);
    }
    
    
    // if option_8 is active this frame...
    if (option_8.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([text_box1, text_box2, text_box3, text_box4, text_box5, text_box6, text_box7, text_box8])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([text_box1, text_box2, text_box3, text_box4, text_box5, text_box6, text_box7, text_box8])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = eval( ("text_box" + Number.parseInt(ANSWER).toString()));
              for (let obj of [corrAns]) {
                  if (obj.contains(mouse)) {
                      corr = 1;
                  };
              };
              mouse.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_VR_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_VR_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_VR_trial' ---
    for (const thisComponent of routine_VR_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_VR_trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.corr', mouse.corr);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "routine_VR_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_LN_trialsMaxDurationReached;
var routine_LN_trialsMaxDuration;
var routine_LN_trialsComponents;
function routine_LN_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_LN_trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    routine_LN_trialsClock.reset();
    routineTimer.reset();
    routine_LN_trialsMaxDurationReached = false;
    // update component parameters for each repeat
    question_text_2.setText(QUESTION.replace("\\n", "\n"));
    option.setText(choice1.toString().replace(".0", ""));
    option_9.setText(choice2.toString().replace(".0", ""));
    option_10.setText(choice3.toString().replace(".0", ""));
    option_11.setText(choice4.toString().replace(".0", ""));
    option_12.setText(choice5.toString().replace(".0", ""));
    option_13.setText(choice6.toString().replace(".0", ""));
    option_14.setText(choice7.toString().replace(".0", ""));
    option_15.setText(choice8.toString().replace(".0", ""));
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.corr = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('routine_LN_trials.started', globalClock.getTime());
    routine_LN_trialsMaxDuration = null
    // keep track of which components have finished
    routine_LN_trialsComponents = [];
    routine_LN_trialsComponents.push(text_box1_2);
    routine_LN_trialsComponents.push(text_box2_2);
    routine_LN_trialsComponents.push(text_box3_2);
    routine_LN_trialsComponents.push(text_box4_2);
    routine_LN_trialsComponents.push(text_box5_2);
    routine_LN_trialsComponents.push(text_box6_2);
    routine_LN_trialsComponents.push(text_box7_2);
    routine_LN_trialsComponents.push(text_box8_2);
    routine_LN_trialsComponents.push(question_text_2);
    routine_LN_trialsComponents.push(option);
    routine_LN_trialsComponents.push(option_9);
    routine_LN_trialsComponents.push(option_10);
    routine_LN_trialsComponents.push(option_11);
    routine_LN_trialsComponents.push(option_12);
    routine_LN_trialsComponents.push(option_13);
    routine_LN_trialsComponents.push(option_14);
    routine_LN_trialsComponents.push(option_15);
    routine_LN_trialsComponents.push(mouse_4);
    
    for (const thisComponent of routine_LN_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_LN_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_LN_trials' ---
    // get current time
    t = routine_LN_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_box1_2* updates
    if (t >= 0.0 && text_box1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box1_2.tStart = t;  // (not accounting for frame time here)
      text_box1_2.frameNStart = frameN;  // exact frame index
      
      text_box1_2.setAutoDraw(true);
    }
    
    
    // if text_box1_2 is active this frame...
    if (text_box1_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box2_2* updates
    if (t >= 0.0 && text_box2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box2_2.tStart = t;  // (not accounting for frame time here)
      text_box2_2.frameNStart = frameN;  // exact frame index
      
      text_box2_2.setAutoDraw(true);
    }
    
    
    // if text_box2_2 is active this frame...
    if (text_box2_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box3_2* updates
    if (t >= 0.0 && text_box3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box3_2.tStart = t;  // (not accounting for frame time here)
      text_box3_2.frameNStart = frameN;  // exact frame index
      
      text_box3_2.setAutoDraw(true);
    }
    
    
    // if text_box3_2 is active this frame...
    if (text_box3_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box4_2* updates
    if (t >= 0.0 && text_box4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box4_2.tStart = t;  // (not accounting for frame time here)
      text_box4_2.frameNStart = frameN;  // exact frame index
      
      text_box4_2.setAutoDraw(true);
    }
    
    
    // if text_box4_2 is active this frame...
    if (text_box4_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box5_2* updates
    if (t >= 0.0 && text_box5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box5_2.tStart = t;  // (not accounting for frame time here)
      text_box5_2.frameNStart = frameN;  // exact frame index
      
      text_box5_2.setAutoDraw(true);
    }
    
    
    // if text_box5_2 is active this frame...
    if (text_box5_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box6_2* updates
    if (t >= 0.0 && text_box6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box6_2.tStart = t;  // (not accounting for frame time here)
      text_box6_2.frameNStart = frameN;  // exact frame index
      
      text_box6_2.setAutoDraw(true);
    }
    
    
    // if text_box6_2 is active this frame...
    if (text_box6_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box7_2* updates
    if (t >= 0.0 && text_box7_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box7_2.tStart = t;  // (not accounting for frame time here)
      text_box7_2.frameNStart = frameN;  // exact frame index
      
      text_box7_2.setAutoDraw(true);
    }
    
    
    // if text_box7_2 is active this frame...
    if (text_box7_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_box8_2* updates
    if (t >= 0.0 && text_box8_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_box8_2.tStart = t;  // (not accounting for frame time here)
      text_box8_2.frameNStart = frameN;  // exact frame index
      
      text_box8_2.setAutoDraw(true);
    }
    
    
    // if text_box8_2 is active this frame...
    if (text_box8_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question_text_2* updates
    if (t >= 0.0 && question_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text_2.tStart = t;  // (not accounting for frame time here)
      question_text_2.frameNStart = frameN;  // exact frame index
      
      question_text_2.setAutoDraw(true);
    }
    
    
    // if question_text_2 is active this frame...
    if (question_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option* updates
    if (t >= 0.0 && option.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option.tStart = t;  // (not accounting for frame time here)
      option.frameNStart = frameN;  // exact frame index
      
      option.setAutoDraw(true);
    }
    
    
    // if option is active this frame...
    if (option.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_9* updates
    if (t >= 0.0 && option_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_9.tStart = t;  // (not accounting for frame time here)
      option_9.frameNStart = frameN;  // exact frame index
      
      option_9.setAutoDraw(true);
    }
    
    
    // if option_9 is active this frame...
    if (option_9.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_10* updates
    if (t >= 0.0 && option_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_10.tStart = t;  // (not accounting for frame time here)
      option_10.frameNStart = frameN;  // exact frame index
      
      option_10.setAutoDraw(true);
    }
    
    
    // if option_10 is active this frame...
    if (option_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_11* updates
    if (t >= 0.0 && option_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_11.tStart = t;  // (not accounting for frame time here)
      option_11.frameNStart = frameN;  // exact frame index
      
      option_11.setAutoDraw(true);
    }
    
    
    // if option_11 is active this frame...
    if (option_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_12* updates
    if (t >= 0.0 && option_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_12.tStart = t;  // (not accounting for frame time here)
      option_12.frameNStart = frameN;  // exact frame index
      
      option_12.setAutoDraw(true);
    }
    
    
    // if option_12 is active this frame...
    if (option_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_13* updates
    if (t >= 0.0 && option_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_13.tStart = t;  // (not accounting for frame time here)
      option_13.frameNStart = frameN;  // exact frame index
      
      option_13.setAutoDraw(true);
    }
    
    
    // if option_13 is active this frame...
    if (option_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_14* updates
    if (t >= 0.0 && option_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_14.tStart = t;  // (not accounting for frame time here)
      option_14.frameNStart = frameN;  // exact frame index
      
      option_14.setAutoDraw(true);
    }
    
    
    // if option_14 is active this frame...
    if (option_14.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *option_15* updates
    if (t >= 0.0 && option_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option_15.tStart = t;  // (not accounting for frame time here)
      option_15.frameNStart = frameN;  // exact frame index
      
      option_15.setAutoDraw(true);
    }
    
    
    // if option_15 is active this frame...
    if (option_15.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_4 is active this frame...
    if (mouse_4.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([text_box1_2, text_box2_2, text_box3_2, text_box4_2, text_box5_2, text_box6_2, text_box7_2, text_box8_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([text_box1_2, text_box2_2, text_box3_2, text_box4_2, text_box5_2, text_box6_2, text_box7_2, text_box8_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = eval( (("text_box" + Number.parseInt(ANSWER).toString()) + "_2"));
              for (let obj of [corrAns]) {
                  if (obj.contains(mouse_4)) {
                      corr = 1;
                  };
              };
              mouse_4.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = mouse_4.getPos();
            mouse_4.x.push(_mouseXYs[0]);
            mouse_4.y.push(_mouseXYs[1]);
            mouse_4.leftButton.push(_mouseButtons[0]);
            mouse_4.midButton.push(_mouseButtons[1]);
            mouse_4.rightButton.push(_mouseButtons[2]);
            mouse_4.time.push(mouse_4.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_LN_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_LN_trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_LN_trials' ---
    for (const thisComponent of routine_LN_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_LN_trials.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    psychoJS.experiment.addData('mouse_4.corr', mouse_4.corr);
    psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name);
    
    // the Routine "routine_LN_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_3DR_trialMaxDurationReached;
var routine_3DR_trialMaxDuration;
var routine_3DR_trialComponents;
function routine_3DR_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_3DR_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    routine_3DR_trialClock.reset();
    routineTimer.reset();
    routine_3DR_trialMaxDurationReached = false;
    // update component parameters for each repeat
    ROT_Q.setText(QUESTION);
    ROT_image.setImage(image_file);
    ROT_OPT_1.setText(choice1.toString().replace(".0", ""));
    ROT_OPT_2.setText(choice2.toString().replace(".0", ""));
    ROT_OPT_3.setText(choice3.toString().replace(".0", ""));
    ROT_OPT_4.setText(choice4.toString().replace(".0", ""));
    ROT_OPT_5.setText(choice5.toString().replace(".0", ""));
    ROT_OPT_6.setText(choice6.toString().replace(".0", ""));
    ROT_OPT_7.setText(choice7.toString().replace(".0", ""));
    ROT_OPT_8.setText(choice8.toString().replace(".0", ""));
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.corr = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('routine_3DR_trial.started', globalClock.getTime());
    routine_3DR_trialMaxDuration = null
    // keep track of which components have finished
    routine_3DR_trialComponents = [];
    routine_3DR_trialComponents.push(rot_pol_1);
    routine_3DR_trialComponents.push(rot_pol_2);
    routine_3DR_trialComponents.push(rot_pol_3);
    routine_3DR_trialComponents.push(rot_pol_4);
    routine_3DR_trialComponents.push(rot_pol_5);
    routine_3DR_trialComponents.push(rot_pol_6);
    routine_3DR_trialComponents.push(rot_pol_7);
    routine_3DR_trialComponents.push(rot_pol_8);
    routine_3DR_trialComponents.push(ROT_Q);
    routine_3DR_trialComponents.push(ROT_image);
    routine_3DR_trialComponents.push(ROT_OPT_1);
    routine_3DR_trialComponents.push(ROT_OPT_2);
    routine_3DR_trialComponents.push(ROT_OPT_3);
    routine_3DR_trialComponents.push(ROT_OPT_4);
    routine_3DR_trialComponents.push(ROT_OPT_5);
    routine_3DR_trialComponents.push(ROT_OPT_6);
    routine_3DR_trialComponents.push(ROT_OPT_7);
    routine_3DR_trialComponents.push(ROT_OPT_8);
    routine_3DR_trialComponents.push(mouse_2);
    
    for (const thisComponent of routine_3DR_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_3DR_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_3DR_trial' ---
    // get current time
    t = routine_3DR_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rot_pol_1* updates
    if (t >= 0.0 && rot_pol_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_1.tStart = t;  // (not accounting for frame time here)
      rot_pol_1.frameNStart = frameN;  // exact frame index
      
      rot_pol_1.setAutoDraw(true);
    }
    
    
    // if rot_pol_1 is active this frame...
    if (rot_pol_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_2* updates
    if (t >= 0.0 && rot_pol_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_2.tStart = t;  // (not accounting for frame time here)
      rot_pol_2.frameNStart = frameN;  // exact frame index
      
      rot_pol_2.setAutoDraw(true);
    }
    
    
    // if rot_pol_2 is active this frame...
    if (rot_pol_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_3* updates
    if (t >= 0.0 && rot_pol_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_3.tStart = t;  // (not accounting for frame time here)
      rot_pol_3.frameNStart = frameN;  // exact frame index
      
      rot_pol_3.setAutoDraw(true);
    }
    
    
    // if rot_pol_3 is active this frame...
    if (rot_pol_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_4* updates
    if (t >= 0.0 && rot_pol_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_4.tStart = t;  // (not accounting for frame time here)
      rot_pol_4.frameNStart = frameN;  // exact frame index
      
      rot_pol_4.setAutoDraw(true);
    }
    
    
    // if rot_pol_4 is active this frame...
    if (rot_pol_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_5* updates
    if (t >= 0.0 && rot_pol_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_5.tStart = t;  // (not accounting for frame time here)
      rot_pol_5.frameNStart = frameN;  // exact frame index
      
      rot_pol_5.setAutoDraw(true);
    }
    
    
    // if rot_pol_5 is active this frame...
    if (rot_pol_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_6* updates
    if (t >= 0.0 && rot_pol_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_6.tStart = t;  // (not accounting for frame time here)
      rot_pol_6.frameNStart = frameN;  // exact frame index
      
      rot_pol_6.setAutoDraw(true);
    }
    
    
    // if rot_pol_6 is active this frame...
    if (rot_pol_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_7* updates
    if (t >= 0.0 && rot_pol_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_7.tStart = t;  // (not accounting for frame time here)
      rot_pol_7.frameNStart = frameN;  // exact frame index
      
      rot_pol_7.setAutoDraw(true);
    }
    
    
    // if rot_pol_7 is active this frame...
    if (rot_pol_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rot_pol_8* updates
    if (t >= 0.0 && rot_pol_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rot_pol_8.tStart = t;  // (not accounting for frame time here)
      rot_pol_8.frameNStart = frameN;  // exact frame index
      
      rot_pol_8.setAutoDraw(true);
    }
    
    
    // if rot_pol_8 is active this frame...
    if (rot_pol_8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_Q* updates
    if (t >= 0.0 && ROT_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_Q.tStart = t;  // (not accounting for frame time here)
      ROT_Q.frameNStart = frameN;  // exact frame index
      
      ROT_Q.setAutoDraw(true);
    }
    
    
    // if ROT_Q is active this frame...
    if (ROT_Q.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_image* updates
    if (t >= 0.0 && ROT_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_image.tStart = t;  // (not accounting for frame time here)
      ROT_image.frameNStart = frameN;  // exact frame index
      
      ROT_image.setAutoDraw(true);
    }
    
    
    // if ROT_image is active this frame...
    if (ROT_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_1* updates
    if (t >= 0.0 && ROT_OPT_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_1.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_1.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_1.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_1 is active this frame...
    if (ROT_OPT_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_2* updates
    if (t >= 0.0 && ROT_OPT_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_2.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_2.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_2.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_2 is active this frame...
    if (ROT_OPT_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_3* updates
    if (t >= 0.0 && ROT_OPT_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_3.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_3.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_3.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_3 is active this frame...
    if (ROT_OPT_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_4* updates
    if (t >= 0.0 && ROT_OPT_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_4.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_4.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_4.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_4 is active this frame...
    if (ROT_OPT_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_5* updates
    if (t >= 0.0 && ROT_OPT_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_5.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_5.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_5.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_5 is active this frame...
    if (ROT_OPT_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_6* updates
    if (t >= 0.0 && ROT_OPT_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_6.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_6.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_6.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_6 is active this frame...
    if (ROT_OPT_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_7* updates
    if (t >= 0.0 && ROT_OPT_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_7.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_7.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_7.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_7 is active this frame...
    if (ROT_OPT_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ROT_OPT_8* updates
    if (t >= 0.0 && ROT_OPT_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ROT_OPT_8.tStart = t;  // (not accounting for frame time here)
      ROT_OPT_8.frameNStart = frameN;  // exact frame index
      
      ROT_OPT_8.setAutoDraw(true);
    }
    
    
    // if ROT_OPT_8 is active this frame...
    if (ROT_OPT_8.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_2 is active this frame...
    if (mouse_2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([rot_pol_1, rot_pol_2, rot_pol_3, rot_pol_4, rot_pol_5, rot_pol_6, rot_pol_7, rot_pol_8])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([rot_pol_1, rot_pol_2, rot_pol_3, rot_pol_4, rot_pol_5, rot_pol_6, rot_pol_7, rot_pol_8])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = eval( ("rot_pol_" + Number.parseInt(ANSWER).toString()));
              for (let obj of [corrAns]) {
                  if (obj.contains(mouse_2)) {
                      corr = 1;
                  };
              };
              mouse_2.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = mouse_2.getPos();
            mouse_2.x.push(_mouseXYs[0]);
            mouse_2.y.push(_mouseXYs[1]);
            mouse_2.leftButton.push(_mouseButtons[0]);
            mouse_2.midButton.push(_mouseButtons[1]);
            mouse_2.rightButton.push(_mouseButtons[2]);
            mouse_2.time.push(mouse_2.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_3DR_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_3DR_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_3DR_trial' ---
    for (const thisComponent of routine_3DR_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_3DR_trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.corr', mouse_2.corr);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "routine_3DR_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_MX_trialMaxDurationReached;
var routine_MX_trialMaxDuration;
var routine_MX_trialComponents;
function routine_MX_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_MX_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    routine_MX_trialClock.reset();
    routineTimer.reset();
    routine_MX_trialMaxDurationReached = false;
    // update component parameters for each repeat
    MX_Q.setText(QUESTION);
    MX_image.setImage(image_file);
    MX_OPT_1.setText(choice1.toString().replace(".0", ""));
    MX_OPT_2.setText(choice2.toString().replace(".0", ""));
    MX_OPT_3.setText(choice3.toString().replace(".0", ""));
    MX_OPT_4.setText(choice4.toString().replace(".0", ""));
    MX_OPT_5.setText(choice5.toString().replace(".0", ""));
    MX_OPT_6.setText(choice6.toString().replace(".0", ""));
    MX_OPT_7.setText(choice7.toString().replace(".0", ""));
    MX_OPT_8.setText(choice8.toString().replace(".0", ""));
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.corr = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('routine_MX_trial.started', globalClock.getTime());
    routine_MX_trialMaxDuration = null
    // keep track of which components have finished
    routine_MX_trialComponents = [];
    routine_MX_trialComponents.push(MX_pol_1);
    routine_MX_trialComponents.push(MX_pol_2);
    routine_MX_trialComponents.push(MX_pol_3);
    routine_MX_trialComponents.push(MX_pol_4);
    routine_MX_trialComponents.push(MX_pol_5);
    routine_MX_trialComponents.push(MX_pol_6);
    routine_MX_trialComponents.push(MX_pol_7);
    routine_MX_trialComponents.push(MX_pol_8);
    routine_MX_trialComponents.push(MX_Q);
    routine_MX_trialComponents.push(MX_image);
    routine_MX_trialComponents.push(MX_OPT_1);
    routine_MX_trialComponents.push(MX_OPT_2);
    routine_MX_trialComponents.push(MX_OPT_3);
    routine_MX_trialComponents.push(MX_OPT_4);
    routine_MX_trialComponents.push(MX_OPT_5);
    routine_MX_trialComponents.push(MX_OPT_6);
    routine_MX_trialComponents.push(MX_OPT_7);
    routine_MX_trialComponents.push(MX_OPT_8);
    routine_MX_trialComponents.push(mouse_3);
    
    for (const thisComponent of routine_MX_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_MX_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_MX_trial' ---
    // get current time
    t = routine_MX_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *MX_pol_1* updates
    if (t >= 0.0 && MX_pol_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_1.tStart = t;  // (not accounting for frame time here)
      MX_pol_1.frameNStart = frameN;  // exact frame index
      
      MX_pol_1.setAutoDraw(true);
    }
    
    
    // if MX_pol_1 is active this frame...
    if (MX_pol_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_2* updates
    if (t >= 0.0 && MX_pol_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_2.tStart = t;  // (not accounting for frame time here)
      MX_pol_2.frameNStart = frameN;  // exact frame index
      
      MX_pol_2.setAutoDraw(true);
    }
    
    
    // if MX_pol_2 is active this frame...
    if (MX_pol_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_3* updates
    if (t >= 0.0 && MX_pol_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_3.tStart = t;  // (not accounting for frame time here)
      MX_pol_3.frameNStart = frameN;  // exact frame index
      
      MX_pol_3.setAutoDraw(true);
    }
    
    
    // if MX_pol_3 is active this frame...
    if (MX_pol_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_4* updates
    if (t >= 0.0 && MX_pol_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_4.tStart = t;  // (not accounting for frame time here)
      MX_pol_4.frameNStart = frameN;  // exact frame index
      
      MX_pol_4.setAutoDraw(true);
    }
    
    
    // if MX_pol_4 is active this frame...
    if (MX_pol_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_5* updates
    if (t >= 0.0 && MX_pol_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_5.tStart = t;  // (not accounting for frame time here)
      MX_pol_5.frameNStart = frameN;  // exact frame index
      
      MX_pol_5.setAutoDraw(true);
    }
    
    
    // if MX_pol_5 is active this frame...
    if (MX_pol_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_6* updates
    if (t >= 0.0 && MX_pol_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_6.tStart = t;  // (not accounting for frame time here)
      MX_pol_6.frameNStart = frameN;  // exact frame index
      
      MX_pol_6.setAutoDraw(true);
    }
    
    
    // if MX_pol_6 is active this frame...
    if (MX_pol_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_7* updates
    if (t >= 0.0 && MX_pol_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_7.tStart = t;  // (not accounting for frame time here)
      MX_pol_7.frameNStart = frameN;  // exact frame index
      
      MX_pol_7.setAutoDraw(true);
    }
    
    
    // if MX_pol_7 is active this frame...
    if (MX_pol_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_pol_8* updates
    if (t >= 0.0 && MX_pol_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_pol_8.tStart = t;  // (not accounting for frame time here)
      MX_pol_8.frameNStart = frameN;  // exact frame index
      
      MX_pol_8.setAutoDraw(true);
    }
    
    
    // if MX_pol_8 is active this frame...
    if (MX_pol_8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_Q* updates
    if (t >= 0.0 && MX_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_Q.tStart = t;  // (not accounting for frame time here)
      MX_Q.frameNStart = frameN;  // exact frame index
      
      MX_Q.setAutoDraw(true);
    }
    
    
    // if MX_Q is active this frame...
    if (MX_Q.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_image* updates
    if (t >= 0.0 && MX_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_image.tStart = t;  // (not accounting for frame time here)
      MX_image.frameNStart = frameN;  // exact frame index
      
      MX_image.setAutoDraw(true);
    }
    
    
    // if MX_image is active this frame...
    if (MX_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_1* updates
    if (t >= 0.0 && MX_OPT_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_1.tStart = t;  // (not accounting for frame time here)
      MX_OPT_1.frameNStart = frameN;  // exact frame index
      
      MX_OPT_1.setAutoDraw(true);
    }
    
    
    // if MX_OPT_1 is active this frame...
    if (MX_OPT_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_2* updates
    if (t >= 0.0 && MX_OPT_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_2.tStart = t;  // (not accounting for frame time here)
      MX_OPT_2.frameNStart = frameN;  // exact frame index
      
      MX_OPT_2.setAutoDraw(true);
    }
    
    
    // if MX_OPT_2 is active this frame...
    if (MX_OPT_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_3* updates
    if (t >= 0.0 && MX_OPT_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_3.tStart = t;  // (not accounting for frame time here)
      MX_OPT_3.frameNStart = frameN;  // exact frame index
      
      MX_OPT_3.setAutoDraw(true);
    }
    
    
    // if MX_OPT_3 is active this frame...
    if (MX_OPT_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_4* updates
    if (t >= 0.0 && MX_OPT_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_4.tStart = t;  // (not accounting for frame time here)
      MX_OPT_4.frameNStart = frameN;  // exact frame index
      
      MX_OPT_4.setAutoDraw(true);
    }
    
    
    // if MX_OPT_4 is active this frame...
    if (MX_OPT_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_5* updates
    if (t >= 0.0 && MX_OPT_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_5.tStart = t;  // (not accounting for frame time here)
      MX_OPT_5.frameNStart = frameN;  // exact frame index
      
      MX_OPT_5.setAutoDraw(true);
    }
    
    
    // if MX_OPT_5 is active this frame...
    if (MX_OPT_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_6* updates
    if (t >= 0.0 && MX_OPT_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_6.tStart = t;  // (not accounting for frame time here)
      MX_OPT_6.frameNStart = frameN;  // exact frame index
      
      MX_OPT_6.setAutoDraw(true);
    }
    
    
    // if MX_OPT_6 is active this frame...
    if (MX_OPT_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_7* updates
    if (t >= 0.0 && MX_OPT_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_7.tStart = t;  // (not accounting for frame time here)
      MX_OPT_7.frameNStart = frameN;  // exact frame index
      
      MX_OPT_7.setAutoDraw(true);
    }
    
    
    // if MX_OPT_7 is active this frame...
    if (MX_OPT_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *MX_OPT_8* updates
    if (t >= 0.0 && MX_OPT_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MX_OPT_8.tStart = t;  // (not accounting for frame time here)
      MX_OPT_8.frameNStart = frameN;  // exact frame index
      
      MX_OPT_8.setAutoDraw(true);
    }
    
    
    // if MX_OPT_8 is active this frame...
    if (MX_OPT_8.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_3 is active this frame...
    if (mouse_3.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval([MX_pol_1, MX_pol_2, MX_pol_3, MX_pol_4, MX_pol_5, MX_pol_6, MX_pol_7, MX_pol_8])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval([MX_pol_1, MX_pol_2, MX_pol_3, MX_pol_4, MX_pol_5, MX_pol_6, MX_pol_7, MX_pol_8])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = eval( `MX_pol_${Number.parseInt(ANSWER)}`);
              for (let obj of [corrAns]) {
                  if (obj.contains(mouse_3)) {
                      corr = 1;
                  };
              };
              mouse_3.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = mouse_3.getPos();
            mouse_3.x.push(_mouseXYs[0]);
            mouse_3.y.push(_mouseXYs[1]);
            mouse_3.leftButton.push(_mouseButtons[0]);
            mouse_3.midButton.push(_mouseButtons[1]);
            mouse_3.rightButton.push(_mouseButtons[2]);
            mouse_3.time.push(mouse_3.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_MX_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_MX_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_MX_trial' ---
    for (const thisComponent of routine_MX_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_MX_trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    psychoJS.experiment.addData('mouse_3.corr', mouse_3.corr);
    psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name);
    
    // the Routine "routine_MX_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (endMaxDurationReached) {
        endClock.add(endMaxDuration);
    } else {
        endClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DataSavingMaxDurationReached;
var DataSavingMaxDuration;
var DataSavingComponents;
function DataSavingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DataSaving' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DataSavingClock.reset();
    routineTimer.reset();
    DataSavingMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('DataSaving.started', globalClock.getTime());
    DataSavingMaxDuration = null
    // keep track of which components have finished
    DataSavingComponents = [];
    
    for (const thisComponent of DataSavingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DataSavingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DataSaving' ---
    // get current time
    t = DataSavingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DataSavingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DataSavingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DataSaving' ---
    for (const thisComponent of DataSavingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('DataSaving.stopped', globalClock.getTime());
    // the Routine "DataSaving" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  const results_data = psychoJS.experiment.save({
    attributes: []
  });
  
  fetch("https://pipe.jspsych.org/api/data/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      experimentID: "IGJG7547rP0O",
      filename: `data_${expName}_${psychoJS.experiment.extraInfo['participant']}.csv`,
      data: results_data,
    }),
  });
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
