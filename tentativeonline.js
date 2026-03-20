import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

let expName = 'tentativeonline';
let expInfo = {'participant': ''};

const psychoJS = new PsychoJS({ debug: true });

psychoJS.openWindow({ fullscr: true, color: new util.Color('black'), units: 'height' });

psychoJS.schedule(psychoJS.gui.DlgFromDict({ dictionary: expInfo, title: expName }));

const flowScheduler = new Scheduler(psychoJS);
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);
flowScheduler.add(quitPsychoJS, 'Fine', true);

// RISORSE: Qui forziamo il caricamento del file "esca"
let resources = [
  { name: 'conditions_3DR.csv', path: './resources/conditions_3DR.csv' },
  { name: 'default.png', path: './resources/default.png' }
];

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: resources
});

async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();
  psychoJS.experiment.dataFileName = `./data/${expInfo["participant"]}_${expName}`;
  return Scheduler.Event.NEXT;
}

var ROT_image;
async function experimentInit() {
  // Ora assegniamo default.png che ESISTE davvero nella cartella
  ROT_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ROT_image', 
    image : 'default.png', 
    pos : [0, 0.25],
    size : [0.8, 0.4]
  });
  return Scheduler.Event.NEXT;
}

async function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  return Scheduler.Event.QUIT;
}
