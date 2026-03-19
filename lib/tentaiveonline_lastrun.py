#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2026.1.1),
    on Thu Mar 19 16:08:13 2026
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2026.1.1'
expName = 'tentaiveonline'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1024, 768)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/beatriceiaria/Desktop/ICAR_Experiment/tentaiveonline_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    # store pilot mode in data file
    thisExp.addData('piloting', PILOTING, priority=priority.LOW)
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=False,
            monitor='testMonitor', color='black', colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = 'black'
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "routine_VR_trial" ---
    text_box1 = visual.Rect(
        win=win, name='text_box1',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.55, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    text_box2 = visual.Rect(
        win=win, name='text_box2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.18, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    text_box3 = visual.Rect(
        win=win, name='text_box3',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.18, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    text_box4 = visual.Rect(
        win=win, name='text_box4',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.55, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    text_box5 = visual.Rect(
        win=win, name='text_box5',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.55, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-4.0, interpolate=True)
    text_box6 = visual.Rect(
        win=win, name='text_box6',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.18, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-5.0, interpolate=True)
    text_box7 = visual.Rect(
        win=win, name='text_box7',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.18, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-6.0, interpolate=True)
    text_box8 = visual.Rect(
        win=win, name='text_box8',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.55, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-7.0, interpolate=True)
    question_text = visual.TextStim(win=win, name='question_text',
        text='',
        font='Arial Unicode MS',
        units='height', pos=[-0.35, 0.25], draggable=False, height=0.04, wrapWidth=0.6, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    option_1 = visual.TextStim(win=win, name='option_1',
        text='',
        font='Arial Unicode MS',
        pos=[-0.55, -0.05], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    option_2 = visual.TextStim(win=win, name='option_2',
        text='',
        font='Arial Unicode MS',
        pos=[-0.18, -0.05], draggable=False, height=0.023, wrapWidth=0.33, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    option_3 = visual.TextStim(win=win, name='option_3',
        text='',
        font='Arial Unicode MS',
        pos=[0.18, -0.05], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    option_4 = visual.TextStim(win=win, name='option_4',
        text='',
        font='Arial Unicode MS',
        pos=[0.55, -0.05], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    option_5 = visual.TextStim(win=win, name='option_5',
        text='',
        font='Arial Unicode MS',
        pos=[-0.55, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    option_6 = visual.TextStim(win=win, name='option_6',
        text='',
        font='Arial Unicode MS',
        pos=[-0.18, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    option_7 = visual.TextStim(win=win, name='option_7',
        text='',
        font='Arial Unicode MS',
        pos=[0.18, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    option_8 = visual.TextStim(win=win, name='option_8',
        text='',
        font='Arial Unicode MS',
        pos=[0.55, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    mouse = event.Mouse(win=win)
    x, y = [None, None]
    mouse.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "routine_LN_trials" ---
    text_box1_2 = visual.Rect(
        win=win, name='text_box1_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.55, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    text_box2_2 = visual.Rect(
        win=win, name='text_box2_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.18, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    text_box3_2 = visual.Rect(
        win=win, name='text_box3_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.18, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    text_box4_2 = visual.Rect(
        win=win, name='text_box4_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.55, -0.05], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    text_box5_2 = visual.Rect(
        win=win, name='text_box5_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.55, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-4.0, interpolate=True)
    text_box6_2 = visual.Rect(
        win=win, name='text_box6_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[-0.18, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-5.0, interpolate=True)
    text_box7_2 = visual.Rect(
        win=win, name='text_box7_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.18, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-6.0, interpolate=True)
    text_box8_2 = visual.Rect(
        win=win, name='text_box8_2',
        width=(0.33, 0.22)[0], height=(0.33, 0.22)[1],
        ori=0.0, pos=[0.55, -0.28], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='white',
        opacity=None, depth=-7.0, interpolate=True)
    question_text_2 = visual.TextStim(win=win, name='question_text_2',
        text='',
        font='Arial Unicode MS',
        units='height', pos=[-0.35, 0.25], draggable=False, height=0.04, wrapWidth=0.6, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    option = visual.TextStim(win=win, name='option',
        text='',
        font='Arial Unicode MS',
        pos=[-0.55, -0.05], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    option_9 = visual.TextStim(win=win, name='option_9',
        text='',
        font='Arial Unicode MS',
        pos=[-0.18, -0.05], draggable=False, height=0.023, wrapWidth=0.33, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    option_10 = visual.TextStim(win=win, name='option_10',
        text='',
        font='Arial Unicode MS',
        pos=[0.18, -0.05], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    option_11 = visual.TextStim(win=win, name='option_11',
        text='',
        font='Arial Unicode MS',
        pos=[0.55, -0.05], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    option_12 = visual.TextStim(win=win, name='option_12',
        text='',
        font='Arial Unicode MS',
        pos=[-0.55, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    option_13 = visual.TextStim(win=win, name='option_13',
        text='',
        font='Arial Unicode MS',
        pos=[-0.18, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    option_14 = visual.TextStim(win=win, name='option_14',
        text='',
        font='Arial Unicode MS',
        pos=[0.18, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    option_15 = visual.TextStim(win=win, name='option_15',
        text='',
        font='Arial Unicode MS',
        pos=[0.55, -0.28], draggable=False, height=0.023, wrapWidth=0.29, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    mouse_4 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_4.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "routine_3DR_trial" ---
    rot_pol_1 = visual.Rect(
        win=win, name='rot_pol_1',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.45, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    rot_pol_2 = visual.Rect(
        win=win, name='rot_pol_2',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.15, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    rot_pol_3 = visual.Rect(
        win=win, name='rot_pol_3',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.15, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    rot_pol_4 = visual.Rect(
        win=win, name='rot_pol_4',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.45, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    rot_pol_5 = visual.Rect(
        win=win, name='rot_pol_5',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.45, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-4.0, interpolate=True)
    rot_pol_6 = visual.Rect(
        win=win, name='rot_pol_6',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.15, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-5.0, interpolate=True)
    rot_pol_7 = visual.Rect(
        win=win, name='rot_pol_7',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.15, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-6.0, interpolate=True)
    rot_pol_8 = visual.Rect(
        win=win, name='rot_pol_8',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.45, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-7.0, interpolate=True)
    ROT_Q = visual.TextStim(win=win, name='ROT_Q',
        text='',
        font='Arial Unicode MS',
        units='height', pos=[-0.35, 0.35], draggable=False, height=0.04, wrapWidth=0.6, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    ROT_image = visual.ImageStim(
        win=win,
        name='ROT_image', 
        image='default.png', mask=None, anchor='top-center',
        ori=0.0, pos=[0, 0.25], draggable=False, size=[0.8, 0.4],
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    ROT_OPT_1 = visual.TextStim(win=win, name='ROT_OPT_1',
        text='',
        font='Arial Unicode MS',
        pos=[-0.45, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    ROT_OPT_2 = visual.TextStim(win=win, name='ROT_OPT_2',
        text='',
        font='Arial Unicode MS',
        pos=[-0.15, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    ROT_OPT_3 = visual.TextStim(win=win, name='ROT_OPT_3',
        text='',
        font='Arial Unicode MS',
        pos=[0.15, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    ROT_OPT_4 = visual.TextStim(win=win, name='ROT_OPT_4',
        text='',
        font='Arial Unicode MS',
        pos=[0.45, -0.22], draggable=False, height=0.02, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    ROT_OPT_5 = visual.TextStim(win=win, name='ROT_OPT_5',
        text='',
        font='Arial Unicode MS',
        pos=[-0.45, -0.37], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    ROT_OPT_6 = visual.TextStim(win=win, name='ROT_OPT_6',
        text='',
        font='Arial Unicode MS',
        pos=[-0.15, -0.37], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    ROT_OPT_7 = visual.TextStim(win=win, name='ROT_OPT_7',
        text='',
        font='Arial Unicode MS',
        pos=[0.15, -0.37], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    ROT_OPT_8 = visual.TextStim(win=win, name='ROT_OPT_8',
        text='',
        font='Arial Unicode MS',
        pos=[0.45, -0.37], draggable=False, height=0.02, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    mouse_2 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_2.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "routine_MX_trial" ---
    MX_pol_1 = visual.Rect(
        win=win, name='MX_pol_1',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.45, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    MX_pol_2 = visual.Rect(
        win=win, name='MX_pol_2',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.15, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    MX_pol_3 = visual.Rect(
        win=win, name='MX_pol_3',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.15, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    MX_pol_4 = visual.Rect(
        win=win, name='MX_pol_4',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.45, -0.22], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    MX_pol_5 = visual.Rect(
        win=win, name='MX_pol_5',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.45, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-4.0, interpolate=True)
    MX_pol_6 = visual.Rect(
        win=win, name='MX_pol_6',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[-0.15, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-5.0, interpolate=True)
    MX_pol_7 = visual.Rect(
        win=win, name='MX_pol_7',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.15, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-6.0, interpolate=True)
    MX_pol_8 = visual.Rect(
        win=win, name='MX_pol_8',
        width=[0.25, 0.1][0], height=[0.25, 0.1][1],
        ori=0.0, pos=[0.45, -0.37], draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-7.0, interpolate=True)
    MX_Q = visual.TextStim(win=win, name='MX_Q',
        text='',
        font='Arial Unicode MS',
        units='height', pos=[-0.35, 0.40], draggable=False, height=0.04, wrapWidth=0.6, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    MX_image_ = visual.ImageStim(
        win=win,
        name='MX_image_', 
        image='default.png', mask=None, anchor='top-center',
        ori=0.0, pos=[0, 0.32], draggable=False, size=[0.8, 0.4],
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    MX_OPT_1 = visual.TextStim(win=win, name='MX_OPT_1',
        text='',
        font='Arial Unicode MS',
        pos=[-0.45, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    MX_OPT_2 = visual.TextStim(win=win, name='MX_OPT_2',
        text='',
        font='Arial Unicode MS',
        pos=[-0.15, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    MX_OPT_3 = visual.TextStim(win=win, name='MX_OPT_3',
        text='',
        font='Arial Unicode MS',
        pos=[0.15, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    MX_OPT_4 = visual.TextStim(win=win, name='MX_OPT_4',
        text='',
        font='Arial Unicode MS',
        pos=[0.45, -0.22], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    MX_OPT_5 = visual.TextStim(win=win, name='MX_OPT_5',
        text='',
        font='Arial Unicode MS',
        pos=[-0.45, -0.37], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    MX_OPT_6 = visual.TextStim(win=win, name='MX_OPT_6',
        text='',
        font='Arial Unicode MS',
        pos=[-0.15, -0.37], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    MX_OPT_7 = visual.TextStim(win=win, name='MX_OPT_7',
        text='',
        font='Arial Unicode MS',
        pos=[0.15, -0.37], draggable=False, height=0.02, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    MX_OPT_8 = visual.TextStim(win=win, name='MX_OPT_8',
        text='',
        font='Arial Unicode MS',
        pos=[0.45, -0.37], draggable=False, height=0.02, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    mouse_3 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_3.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "end" ---
    text = visual.TextStim(win=win, name='text',
        text='ありがとうございます。',
        font='Arial Unicode MS',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "DataSaving" ---
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # set up handler to look after randomisation of conditions etc
    VR_trials = data.TrialHandler2(
        name='VR_trials',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(
        'conditions_VR.csv', 
        selection=random(4)*16
    )
    , 
        seed=4, 
        isTrials=True, 
    )
    thisExp.addLoop(VR_trials)  # add the loop to the experiment
    thisVR_trial = VR_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisVR_trial.rgb)
    if thisVR_trial != None:
        for paramName in thisVR_trial:
            globals()[paramName] = thisVR_trial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisVR_trial in VR_trials:
        VR_trials.status = STARTED
        if hasattr(thisVR_trial, 'status'):
            thisVR_trial.status = STARTED
        currentLoop = VR_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisVR_trial.rgb)
        if thisVR_trial != None:
            for paramName in thisVR_trial:
                globals()[paramName] = thisVR_trial[paramName]
        
        # --- Prepare to start Routine "routine_VR_trial" ---
        # create an object to store info about Routine routine_VR_trial
        routine_VR_trial = data.Routine(
            name='routine_VR_trial',
            components=[text_box1, text_box2, text_box3, text_box4, text_box5, text_box6, text_box7, text_box8, question_text, option_1, option_2, option_3, option_4, option_5, option_6, option_7, option_8, mouse],
        )
        routine_VR_trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        question_text.setText(QUESTION.replace('\\n', '\n'))
        option_1.setText(str(choice1).replace('.0', ''))
        option_2.setText(str(choice2).replace('.0', ''))
        option_3.setText(str(choice3).replace('.0', ''))
        option_4.setText(str(choice4).replace('.0', ''))
        option_5.setText(str(choice5).replace('.0', ''))
        option_6.setText(str(choice6).replace('.0', ''))
        option_7.setText(str(choice7).replace('.0', ''))
        option_8.setText(str(choice8).replace('.0', ''))
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        mouse.corr = []
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for routine_VR_trial
        routine_VR_trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        routine_VR_trial.tStart = globalClock.getTime(format='float')
        routine_VR_trial.status = STARTED
        thisExp.addData('routine_VR_trial.started', routine_VR_trial.tStart)
        routine_VR_trial.maxDuration = None
        # keep track of which components have finished
        routine_VR_trialComponents = routine_VR_trial.components
        for thisComponent in routine_VR_trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "routine_VR_trial" ---
        thisExp.currentRoutine = routine_VR_trial
        routine_VR_trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisVR_trial, 'status') and thisVR_trial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_box1* updates
            
            # if text_box1 is starting this frame...
            if text_box1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box1.frameNStart = frameN  # exact frame index
                text_box1.tStart = t  # local t and not account for scr refresh
                text_box1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box1.started')
                # update status
                text_box1.status = STARTED
                text_box1.setAutoDraw(True)
            
            # if text_box1 is active this frame...
            if text_box1.status == STARTED:
                # update params
                pass
            
            # *text_box2* updates
            
            # if text_box2 is starting this frame...
            if text_box2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box2.frameNStart = frameN  # exact frame index
                text_box2.tStart = t  # local t and not account for scr refresh
                text_box2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box2.started')
                # update status
                text_box2.status = STARTED
                text_box2.setAutoDraw(True)
            
            # if text_box2 is active this frame...
            if text_box2.status == STARTED:
                # update params
                pass
            
            # *text_box3* updates
            
            # if text_box3 is starting this frame...
            if text_box3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box3.frameNStart = frameN  # exact frame index
                text_box3.tStart = t  # local t and not account for scr refresh
                text_box3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box3.started')
                # update status
                text_box3.status = STARTED
                text_box3.setAutoDraw(True)
            
            # if text_box3 is active this frame...
            if text_box3.status == STARTED:
                # update params
                pass
            
            # *text_box4* updates
            
            # if text_box4 is starting this frame...
            if text_box4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box4.frameNStart = frameN  # exact frame index
                text_box4.tStart = t  # local t and not account for scr refresh
                text_box4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box4.started')
                # update status
                text_box4.status = STARTED
                text_box4.setAutoDraw(True)
            
            # if text_box4 is active this frame...
            if text_box4.status == STARTED:
                # update params
                pass
            
            # *text_box5* updates
            
            # if text_box5 is starting this frame...
            if text_box5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box5.frameNStart = frameN  # exact frame index
                text_box5.tStart = t  # local t and not account for scr refresh
                text_box5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box5.started')
                # update status
                text_box5.status = STARTED
                text_box5.setAutoDraw(True)
            
            # if text_box5 is active this frame...
            if text_box5.status == STARTED:
                # update params
                pass
            
            # *text_box6* updates
            
            # if text_box6 is starting this frame...
            if text_box6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box6.frameNStart = frameN  # exact frame index
                text_box6.tStart = t  # local t and not account for scr refresh
                text_box6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box6.started')
                # update status
                text_box6.status = STARTED
                text_box6.setAutoDraw(True)
            
            # if text_box6 is active this frame...
            if text_box6.status == STARTED:
                # update params
                pass
            
            # *text_box7* updates
            
            # if text_box7 is starting this frame...
            if text_box7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box7.frameNStart = frameN  # exact frame index
                text_box7.tStart = t  # local t and not account for scr refresh
                text_box7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box7.started')
                # update status
                text_box7.status = STARTED
                text_box7.setAutoDraw(True)
            
            # if text_box7 is active this frame...
            if text_box7.status == STARTED:
                # update params
                pass
            
            # *text_box8* updates
            
            # if text_box8 is starting this frame...
            if text_box8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box8.frameNStart = frameN  # exact frame index
                text_box8.tStart = t  # local t and not account for scr refresh
                text_box8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box8.started')
                # update status
                text_box8.status = STARTED
                text_box8.setAutoDraw(True)
            
            # if text_box8 is active this frame...
            if text_box8.status == STARTED:
                # update params
                pass
            
            # *question_text* updates
            
            # if question_text is starting this frame...
            if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                question_text.frameNStart = frameN  # exact frame index
                question_text.tStart = t  # local t and not account for scr refresh
                question_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'question_text.started')
                # update status
                question_text.status = STARTED
                question_text.setAutoDraw(True)
            
            # if question_text is active this frame...
            if question_text.status == STARTED:
                # update params
                pass
            
            # *option_1* updates
            
            # if option_1 is starting this frame...
            if option_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_1.frameNStart = frameN  # exact frame index
                option_1.tStart = t  # local t and not account for scr refresh
                option_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_1.started')
                # update status
                option_1.status = STARTED
                option_1.setAutoDraw(True)
            
            # if option_1 is active this frame...
            if option_1.status == STARTED:
                # update params
                pass
            
            # *option_2* updates
            
            # if option_2 is starting this frame...
            if option_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_2.frameNStart = frameN  # exact frame index
                option_2.tStart = t  # local t and not account for scr refresh
                option_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_2.started')
                # update status
                option_2.status = STARTED
                option_2.setAutoDraw(True)
            
            # if option_2 is active this frame...
            if option_2.status == STARTED:
                # update params
                pass
            
            # *option_3* updates
            
            # if option_3 is starting this frame...
            if option_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_3.frameNStart = frameN  # exact frame index
                option_3.tStart = t  # local t and not account for scr refresh
                option_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_3.started')
                # update status
                option_3.status = STARTED
                option_3.setAutoDraw(True)
            
            # if option_3 is active this frame...
            if option_3.status == STARTED:
                # update params
                pass
            
            # *option_4* updates
            
            # if option_4 is starting this frame...
            if option_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_4.frameNStart = frameN  # exact frame index
                option_4.tStart = t  # local t and not account for scr refresh
                option_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_4.started')
                # update status
                option_4.status = STARTED
                option_4.setAutoDraw(True)
            
            # if option_4 is active this frame...
            if option_4.status == STARTED:
                # update params
                pass
            
            # *option_5* updates
            
            # if option_5 is starting this frame...
            if option_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_5.frameNStart = frameN  # exact frame index
                option_5.tStart = t  # local t and not account for scr refresh
                option_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_5.started')
                # update status
                option_5.status = STARTED
                option_5.setAutoDraw(True)
            
            # if option_5 is active this frame...
            if option_5.status == STARTED:
                # update params
                pass
            
            # *option_6* updates
            
            # if option_6 is starting this frame...
            if option_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_6.frameNStart = frameN  # exact frame index
                option_6.tStart = t  # local t and not account for scr refresh
                option_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_6.started')
                # update status
                option_6.status = STARTED
                option_6.setAutoDraw(True)
            
            # if option_6 is active this frame...
            if option_6.status == STARTED:
                # update params
                pass
            
            # *option_7* updates
            
            # if option_7 is starting this frame...
            if option_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_7.frameNStart = frameN  # exact frame index
                option_7.tStart = t  # local t and not account for scr refresh
                option_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_7.started')
                # update status
                option_7.status = STARTED
                option_7.setAutoDraw(True)
            
            # if option_7 is active this frame...
            if option_7.status == STARTED:
                # update params
                pass
            
            # *option_8* updates
            
            # if option_8 is starting this frame...
            if option_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_8.frameNStart = frameN  # exact frame index
                option_8.tStart = t  # local t and not account for scr refresh
                option_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_8.started')
                # update status
                option_8.status = STARTED
                option_8.setAutoDraw(True)
            
            # if option_8 is active this frame...
            if option_8.status == STARTED:
                # update params
                pass
            # *mouse* updates
            
            # if mouse is starting this frame...
            if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse.started', t)
                # update status
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([text_box1, text_box2, text_box3, text_box4, text_box5, text_box6, text_box7, text_box8], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                                mouse.clicked_name.append(obj.name)
                        # check whether click was in correct object
                        if gotValidClick:
                            _corr = 0
                            _corrAns = environmenttools.getFromNames(['text_box' + str(int(ANSWER))], namespace=locals())
                            for obj in _corrAns:
                                # is this object clicked on?
                                if obj.contains(mouse):
                                    _corr = 1
                            mouse.corr.append(_corr)
                        if gotValidClick:
                            x, y = mouse.getPos()
                            mouse.x.append(float(x))
                            mouse.y.append(float(y))
                            buttons = mouse.getPressed()
                            mouse.leftButton.append(buttons[0])
                            mouse.midButton.append(buttons[1])
                            mouse.rightButton.append(buttons[2])
                            mouse.time.append(mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=routine_VR_trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                routine_VR_trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if routine_VR_trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in routine_VR_trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "routine_VR_trial" ---
        for thisComponent in routine_VR_trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for routine_VR_trial
        routine_VR_trial.tStop = globalClock.getTime(format='float')
        routine_VR_trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('routine_VR_trial.stopped', routine_VR_trial.tStop)
        # store data for VR_trials (TrialHandler)
        VR_trials.addData('mouse.x', mouse.x)
        VR_trials.addData('mouse.y', mouse.y)
        VR_trials.addData('mouse.leftButton', mouse.leftButton)
        VR_trials.addData('mouse.midButton', mouse.midButton)
        VR_trials.addData('mouse.rightButton', mouse.rightButton)
        VR_trials.addData('mouse.time', mouse.time)
        VR_trials.addData('mouse.corr', mouse.corr)
        VR_trials.addData('mouse.clicked_name', mouse.clicked_name)
        # the Routine "routine_VR_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisVR_trial as finished
        if hasattr(thisVR_trial, 'status'):
            thisVR_trial.status = FINISHED
        # if awaiting a pause, pause now
        if VR_trials.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            VR_trials.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'VR_trials'
    VR_trials.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    # get names of stimulus parameters
    if VR_trials.trialList in ([], [None], None):
        params = []
    else:
        params = VR_trials.trialList[0].keys()
    # save data for this loop
    VR_trials.saveAsExcel(filename + '.xlsx', sheetName='VR_trials',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # set up handler to look after randomisation of conditions etc
    LN_trials = data.TrialHandler2(
        name='LN_trials',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(
        'conditions_LN.csv', 
        selection=random(4)*9
    )
    , 
        seed=4, 
        isTrials=True, 
    )
    thisExp.addLoop(LN_trials)  # add the loop to the experiment
    thisLN_trial = LN_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLN_trial.rgb)
    if thisLN_trial != None:
        for paramName in thisLN_trial:
            globals()[paramName] = thisLN_trial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisLN_trial in LN_trials:
        LN_trials.status = STARTED
        if hasattr(thisLN_trial, 'status'):
            thisLN_trial.status = STARTED
        currentLoop = LN_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisLN_trial.rgb)
        if thisLN_trial != None:
            for paramName in thisLN_trial:
                globals()[paramName] = thisLN_trial[paramName]
        
        # --- Prepare to start Routine "routine_LN_trials" ---
        # create an object to store info about Routine routine_LN_trials
        routine_LN_trials = data.Routine(
            name='routine_LN_trials',
            components=[text_box1_2, text_box2_2, text_box3_2, text_box4_2, text_box5_2, text_box6_2, text_box7_2, text_box8_2, question_text_2, option, option_9, option_10, option_11, option_12, option_13, option_14, option_15, mouse_4],
        )
        routine_LN_trials.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        question_text_2.setText(QUESTION.replace('\\n', '\n'))
        option.setText(str(choice1).replace('.0', ''))
        option_9.setText(str(choice2).replace('.0', ''))
        option_10.setText(str(choice3).replace('.0', ''))
        option_11.setText(str(choice4).replace('.0', ''))
        option_12.setText(str(choice5).replace('.0', ''))
        option_13.setText(str(choice6).replace('.0', ''))
        option_14.setText(str(choice7).replace('.0', ''))
        option_15.setText(str(choice8).replace('.0', ''))
        # setup some python lists for storing info about the mouse_4
        mouse_4.x = []
        mouse_4.y = []
        mouse_4.leftButton = []
        mouse_4.midButton = []
        mouse_4.rightButton = []
        mouse_4.time = []
        mouse_4.corr = []
        mouse_4.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for routine_LN_trials
        routine_LN_trials.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        routine_LN_trials.tStart = globalClock.getTime(format='float')
        routine_LN_trials.status = STARTED
        thisExp.addData('routine_LN_trials.started', routine_LN_trials.tStart)
        routine_LN_trials.maxDuration = None
        # keep track of which components have finished
        routine_LN_trialsComponents = routine_LN_trials.components
        for thisComponent in routine_LN_trials.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "routine_LN_trials" ---
        thisExp.currentRoutine = routine_LN_trials
        routine_LN_trials.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisLN_trial, 'status') and thisLN_trial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_box1_2* updates
            
            # if text_box1_2 is starting this frame...
            if text_box1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box1_2.frameNStart = frameN  # exact frame index
                text_box1_2.tStart = t  # local t and not account for scr refresh
                text_box1_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box1_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box1_2.started')
                # update status
                text_box1_2.status = STARTED
                text_box1_2.setAutoDraw(True)
            
            # if text_box1_2 is active this frame...
            if text_box1_2.status == STARTED:
                # update params
                pass
            
            # *text_box2_2* updates
            
            # if text_box2_2 is starting this frame...
            if text_box2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box2_2.frameNStart = frameN  # exact frame index
                text_box2_2.tStart = t  # local t and not account for scr refresh
                text_box2_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box2_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box2_2.started')
                # update status
                text_box2_2.status = STARTED
                text_box2_2.setAutoDraw(True)
            
            # if text_box2_2 is active this frame...
            if text_box2_2.status == STARTED:
                # update params
                pass
            
            # *text_box3_2* updates
            
            # if text_box3_2 is starting this frame...
            if text_box3_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box3_2.frameNStart = frameN  # exact frame index
                text_box3_2.tStart = t  # local t and not account for scr refresh
                text_box3_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box3_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box3_2.started')
                # update status
                text_box3_2.status = STARTED
                text_box3_2.setAutoDraw(True)
            
            # if text_box3_2 is active this frame...
            if text_box3_2.status == STARTED:
                # update params
                pass
            
            # *text_box4_2* updates
            
            # if text_box4_2 is starting this frame...
            if text_box4_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box4_2.frameNStart = frameN  # exact frame index
                text_box4_2.tStart = t  # local t and not account for scr refresh
                text_box4_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box4_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box4_2.started')
                # update status
                text_box4_2.status = STARTED
                text_box4_2.setAutoDraw(True)
            
            # if text_box4_2 is active this frame...
            if text_box4_2.status == STARTED:
                # update params
                pass
            
            # *text_box5_2* updates
            
            # if text_box5_2 is starting this frame...
            if text_box5_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box5_2.frameNStart = frameN  # exact frame index
                text_box5_2.tStart = t  # local t and not account for scr refresh
                text_box5_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box5_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box5_2.started')
                # update status
                text_box5_2.status = STARTED
                text_box5_2.setAutoDraw(True)
            
            # if text_box5_2 is active this frame...
            if text_box5_2.status == STARTED:
                # update params
                pass
            
            # *text_box6_2* updates
            
            # if text_box6_2 is starting this frame...
            if text_box6_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box6_2.frameNStart = frameN  # exact frame index
                text_box6_2.tStart = t  # local t and not account for scr refresh
                text_box6_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box6_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box6_2.started')
                # update status
                text_box6_2.status = STARTED
                text_box6_2.setAutoDraw(True)
            
            # if text_box6_2 is active this frame...
            if text_box6_2.status == STARTED:
                # update params
                pass
            
            # *text_box7_2* updates
            
            # if text_box7_2 is starting this frame...
            if text_box7_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box7_2.frameNStart = frameN  # exact frame index
                text_box7_2.tStart = t  # local t and not account for scr refresh
                text_box7_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box7_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box7_2.started')
                # update status
                text_box7_2.status = STARTED
                text_box7_2.setAutoDraw(True)
            
            # if text_box7_2 is active this frame...
            if text_box7_2.status == STARTED:
                # update params
                pass
            
            # *text_box8_2* updates
            
            # if text_box8_2 is starting this frame...
            if text_box8_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_box8_2.frameNStart = frameN  # exact frame index
                text_box8_2.tStart = t  # local t and not account for scr refresh
                text_box8_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_box8_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_box8_2.started')
                # update status
                text_box8_2.status = STARTED
                text_box8_2.setAutoDraw(True)
            
            # if text_box8_2 is active this frame...
            if text_box8_2.status == STARTED:
                # update params
                pass
            
            # *question_text_2* updates
            
            # if question_text_2 is starting this frame...
            if question_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                question_text_2.frameNStart = frameN  # exact frame index
                question_text_2.tStart = t  # local t and not account for scr refresh
                question_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(question_text_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'question_text_2.started')
                # update status
                question_text_2.status = STARTED
                question_text_2.setAutoDraw(True)
            
            # if question_text_2 is active this frame...
            if question_text_2.status == STARTED:
                # update params
                pass
            
            # *option* updates
            
            # if option is starting this frame...
            if option.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option.frameNStart = frameN  # exact frame index
                option.tStart = t  # local t and not account for scr refresh
                option.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option.started')
                # update status
                option.status = STARTED
                option.setAutoDraw(True)
            
            # if option is active this frame...
            if option.status == STARTED:
                # update params
                pass
            
            # *option_9* updates
            
            # if option_9 is starting this frame...
            if option_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_9.frameNStart = frameN  # exact frame index
                option_9.tStart = t  # local t and not account for scr refresh
                option_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_9, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_9.started')
                # update status
                option_9.status = STARTED
                option_9.setAutoDraw(True)
            
            # if option_9 is active this frame...
            if option_9.status == STARTED:
                # update params
                pass
            
            # *option_10* updates
            
            # if option_10 is starting this frame...
            if option_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_10.frameNStart = frameN  # exact frame index
                option_10.tStart = t  # local t and not account for scr refresh
                option_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_10, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_10.started')
                # update status
                option_10.status = STARTED
                option_10.setAutoDraw(True)
            
            # if option_10 is active this frame...
            if option_10.status == STARTED:
                # update params
                pass
            
            # *option_11* updates
            
            # if option_11 is starting this frame...
            if option_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_11.frameNStart = frameN  # exact frame index
                option_11.tStart = t  # local t and not account for scr refresh
                option_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_11, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_11.started')
                # update status
                option_11.status = STARTED
                option_11.setAutoDraw(True)
            
            # if option_11 is active this frame...
            if option_11.status == STARTED:
                # update params
                pass
            
            # *option_12* updates
            
            # if option_12 is starting this frame...
            if option_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_12.frameNStart = frameN  # exact frame index
                option_12.tStart = t  # local t and not account for scr refresh
                option_12.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_12, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_12.started')
                # update status
                option_12.status = STARTED
                option_12.setAutoDraw(True)
            
            # if option_12 is active this frame...
            if option_12.status == STARTED:
                # update params
                pass
            
            # *option_13* updates
            
            # if option_13 is starting this frame...
            if option_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_13.frameNStart = frameN  # exact frame index
                option_13.tStart = t  # local t and not account for scr refresh
                option_13.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_13, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_13.started')
                # update status
                option_13.status = STARTED
                option_13.setAutoDraw(True)
            
            # if option_13 is active this frame...
            if option_13.status == STARTED:
                # update params
                pass
            
            # *option_14* updates
            
            # if option_14 is starting this frame...
            if option_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_14.frameNStart = frameN  # exact frame index
                option_14.tStart = t  # local t and not account for scr refresh
                option_14.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_14, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_14.started')
                # update status
                option_14.status = STARTED
                option_14.setAutoDraw(True)
            
            # if option_14 is active this frame...
            if option_14.status == STARTED:
                # update params
                pass
            
            # *option_15* updates
            
            # if option_15 is starting this frame...
            if option_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                option_15.frameNStart = frameN  # exact frame index
                option_15.tStart = t  # local t and not account for scr refresh
                option_15.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(option_15, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'option_15.started')
                # update status
                option_15.status = STARTED
                option_15.setAutoDraw(True)
            
            # if option_15 is active this frame...
            if option_15.status == STARTED:
                # update params
                pass
            # *mouse_4* updates
            
            # if mouse_4 is starting this frame...
            if mouse_4.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_4.frameNStart = frameN  # exact frame index
                mouse_4.tStart = t  # local t and not account for scr refresh
                mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_4.started', t)
                # update status
                mouse_4.status = STARTED
                mouse_4.mouseClock.reset()
                prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
            if mouse_4.status == STARTED:  # only update if started and not finished!
                buttons = mouse_4.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([text_box1_2, text_box2_2, text_box3_2, text_box4_2, text_box5_2, text_box6_2, text_box7_2, text_box8_2], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse_4):
                                gotValidClick = True
                                mouse_4.clicked_name.append(obj.name)
                                mouse_4.clicked_name.append(obj.name)
                        # check whether click was in correct object
                        if gotValidClick:
                            _corr = 0
                            _corrAns = environmenttools.getFromNames(['text_box' + str(int(ANSWER)) +'_2'], namespace=locals())
                            for obj in _corrAns:
                                # is this object clicked on?
                                if obj.contains(mouse_4):
                                    _corr = 1
                            mouse_4.corr.append(_corr)
                        if gotValidClick:
                            x, y = mouse_4.getPos()
                            mouse_4.x.append(float(x))
                            mouse_4.y.append(float(y))
                            buttons = mouse_4.getPressed()
                            mouse_4.leftButton.append(buttons[0])
                            mouse_4.midButton.append(buttons[1])
                            mouse_4.rightButton.append(buttons[2])
                            mouse_4.time.append(mouse_4.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=routine_LN_trials,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                routine_LN_trials.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if routine_LN_trials.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in routine_LN_trials.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "routine_LN_trials" ---
        for thisComponent in routine_LN_trials.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for routine_LN_trials
        routine_LN_trials.tStop = globalClock.getTime(format='float')
        routine_LN_trials.tStopRefresh = tThisFlipGlobal
        thisExp.addData('routine_LN_trials.stopped', routine_LN_trials.tStop)
        # store data for LN_trials (TrialHandler)
        LN_trials.addData('mouse_4.x', mouse_4.x)
        LN_trials.addData('mouse_4.y', mouse_4.y)
        LN_trials.addData('mouse_4.leftButton', mouse_4.leftButton)
        LN_trials.addData('mouse_4.midButton', mouse_4.midButton)
        LN_trials.addData('mouse_4.rightButton', mouse_4.rightButton)
        LN_trials.addData('mouse_4.time', mouse_4.time)
        LN_trials.addData('mouse_4.corr', mouse_4.corr)
        LN_trials.addData('mouse_4.clicked_name', mouse_4.clicked_name)
        # the Routine "routine_LN_trials" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisLN_trial as finished
        if hasattr(thisLN_trial, 'status'):
            thisLN_trial.status = FINISHED
        # if awaiting a pause, pause now
        if LN_trials.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            LN_trials.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'LN_trials'
    LN_trials.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    # get names of stimulus parameters
    if LN_trials.trialList in ([], [None], None):
        params = []
    else:
        params = LN_trials.trialList[0].keys()
    # save data for this loop
    LN_trials.saveAsExcel(filename + '.xlsx', sheetName='LN_trials',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # set up handler to look after randomisation of conditions etc
    ROT_trials = data.TrialHandler2(
        name='ROT_trials',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(
        'conditions_3DR.csv', 
        selection=random(4)*66
    )
    , 
        seed=4, 
        isTrials=True, 
    )
    thisExp.addLoop(ROT_trials)  # add the loop to the experiment
    thisROT_trial = ROT_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisROT_trial.rgb)
    if thisROT_trial != None:
        for paramName in thisROT_trial:
            globals()[paramName] = thisROT_trial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisROT_trial in ROT_trials:
        ROT_trials.status = STARTED
        if hasattr(thisROT_trial, 'status'):
            thisROT_trial.status = STARTED
        currentLoop = ROT_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisROT_trial.rgb)
        if thisROT_trial != None:
            for paramName in thisROT_trial:
                globals()[paramName] = thisROT_trial[paramName]
        
        # --- Prepare to start Routine "routine_3DR_trial" ---
        # create an object to store info about Routine routine_3DR_trial
        routine_3DR_trial = data.Routine(
            name='routine_3DR_trial',
            components=[rot_pol_1, rot_pol_2, rot_pol_3, rot_pol_4, rot_pol_5, rot_pol_6, rot_pol_7, rot_pol_8, ROT_Q, ROT_image, ROT_OPT_1, ROT_OPT_2, ROT_OPT_3, ROT_OPT_4, ROT_OPT_5, ROT_OPT_6, ROT_OPT_7, ROT_OPT_8, mouse_2],
        )
        routine_3DR_trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        ROT_Q.setText(QUESTION)
        ROT_image.setImage(image_file)
        ROT_OPT_1.setText(str(choice1).replace('.0', ''))
        ROT_OPT_2.setText(str(choice2).replace('.0', ''))
        ROT_OPT_3.setText(str(choice3).replace('.0', ''))
        ROT_OPT_4.setText(str(choice4).replace('.0', ''))
        ROT_OPT_5.setText(str(choice5).replace('.0', ''))
        ROT_OPT_6.setText(str(choice6).replace('.0', ''))
        ROT_OPT_7.setText(str(choice7).replace('.0', ''))
        ROT_OPT_8.setText(str(choice8).replace('.0', ''))
        # setup some python lists for storing info about the mouse_2
        mouse_2.x = []
        mouse_2.y = []
        mouse_2.leftButton = []
        mouse_2.midButton = []
        mouse_2.rightButton = []
        mouse_2.time = []
        mouse_2.corr = []
        mouse_2.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for routine_3DR_trial
        routine_3DR_trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        routine_3DR_trial.tStart = globalClock.getTime(format='float')
        routine_3DR_trial.status = STARTED
        thisExp.addData('routine_3DR_trial.started', routine_3DR_trial.tStart)
        routine_3DR_trial.maxDuration = None
        # keep track of which components have finished
        routine_3DR_trialComponents = routine_3DR_trial.components
        for thisComponent in routine_3DR_trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "routine_3DR_trial" ---
        thisExp.currentRoutine = routine_3DR_trial
        routine_3DR_trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisROT_trial, 'status') and thisROT_trial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rot_pol_1* updates
            
            # if rot_pol_1 is starting this frame...
            if rot_pol_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_1.frameNStart = frameN  # exact frame index
                rot_pol_1.tStart = t  # local t and not account for scr refresh
                rot_pol_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_1.started')
                # update status
                rot_pol_1.status = STARTED
                rot_pol_1.setAutoDraw(True)
            
            # if rot_pol_1 is active this frame...
            if rot_pol_1.status == STARTED:
                # update params
                pass
            
            # *rot_pol_2* updates
            
            # if rot_pol_2 is starting this frame...
            if rot_pol_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_2.frameNStart = frameN  # exact frame index
                rot_pol_2.tStart = t  # local t and not account for scr refresh
                rot_pol_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_2.started')
                # update status
                rot_pol_2.status = STARTED
                rot_pol_2.setAutoDraw(True)
            
            # if rot_pol_2 is active this frame...
            if rot_pol_2.status == STARTED:
                # update params
                pass
            
            # *rot_pol_3* updates
            
            # if rot_pol_3 is starting this frame...
            if rot_pol_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_3.frameNStart = frameN  # exact frame index
                rot_pol_3.tStart = t  # local t and not account for scr refresh
                rot_pol_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_3.started')
                # update status
                rot_pol_3.status = STARTED
                rot_pol_3.setAutoDraw(True)
            
            # if rot_pol_3 is active this frame...
            if rot_pol_3.status == STARTED:
                # update params
                pass
            
            # *rot_pol_4* updates
            
            # if rot_pol_4 is starting this frame...
            if rot_pol_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_4.frameNStart = frameN  # exact frame index
                rot_pol_4.tStart = t  # local t and not account for scr refresh
                rot_pol_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_4.started')
                # update status
                rot_pol_4.status = STARTED
                rot_pol_4.setAutoDraw(True)
            
            # if rot_pol_4 is active this frame...
            if rot_pol_4.status == STARTED:
                # update params
                pass
            
            # *rot_pol_5* updates
            
            # if rot_pol_5 is starting this frame...
            if rot_pol_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_5.frameNStart = frameN  # exact frame index
                rot_pol_5.tStart = t  # local t and not account for scr refresh
                rot_pol_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_5.started')
                # update status
                rot_pol_5.status = STARTED
                rot_pol_5.setAutoDraw(True)
            
            # if rot_pol_5 is active this frame...
            if rot_pol_5.status == STARTED:
                # update params
                pass
            
            # *rot_pol_6* updates
            
            # if rot_pol_6 is starting this frame...
            if rot_pol_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_6.frameNStart = frameN  # exact frame index
                rot_pol_6.tStart = t  # local t and not account for scr refresh
                rot_pol_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_6.started')
                # update status
                rot_pol_6.status = STARTED
                rot_pol_6.setAutoDraw(True)
            
            # if rot_pol_6 is active this frame...
            if rot_pol_6.status == STARTED:
                # update params
                pass
            
            # *rot_pol_7* updates
            
            # if rot_pol_7 is starting this frame...
            if rot_pol_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_7.frameNStart = frameN  # exact frame index
                rot_pol_7.tStart = t  # local t and not account for scr refresh
                rot_pol_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_7.started')
                # update status
                rot_pol_7.status = STARTED
                rot_pol_7.setAutoDraw(True)
            
            # if rot_pol_7 is active this frame...
            if rot_pol_7.status == STARTED:
                # update params
                pass
            
            # *rot_pol_8* updates
            
            # if rot_pol_8 is starting this frame...
            if rot_pol_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rot_pol_8.frameNStart = frameN  # exact frame index
                rot_pol_8.tStart = t  # local t and not account for scr refresh
                rot_pol_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rot_pol_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rot_pol_8.started')
                # update status
                rot_pol_8.status = STARTED
                rot_pol_8.setAutoDraw(True)
            
            # if rot_pol_8 is active this frame...
            if rot_pol_8.status == STARTED:
                # update params
                pass
            
            # *ROT_Q* updates
            
            # if ROT_Q is starting this frame...
            if ROT_Q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_Q.frameNStart = frameN  # exact frame index
                ROT_Q.tStart = t  # local t and not account for scr refresh
                ROT_Q.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_Q, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_Q.started')
                # update status
                ROT_Q.status = STARTED
                ROT_Q.setAutoDraw(True)
            
            # if ROT_Q is active this frame...
            if ROT_Q.status == STARTED:
                # update params
                pass
            
            # *ROT_image* updates
            
            # if ROT_image is starting this frame...
            if ROT_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_image.frameNStart = frameN  # exact frame index
                ROT_image.tStart = t  # local t and not account for scr refresh
                ROT_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_image, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_image.started')
                # update status
                ROT_image.status = STARTED
                ROT_image.setAutoDraw(True)
            
            # if ROT_image is active this frame...
            if ROT_image.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_1* updates
            
            # if ROT_OPT_1 is starting this frame...
            if ROT_OPT_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_1.frameNStart = frameN  # exact frame index
                ROT_OPT_1.tStart = t  # local t and not account for scr refresh
                ROT_OPT_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_1.started')
                # update status
                ROT_OPT_1.status = STARTED
                ROT_OPT_1.setAutoDraw(True)
            
            # if ROT_OPT_1 is active this frame...
            if ROT_OPT_1.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_2* updates
            
            # if ROT_OPT_2 is starting this frame...
            if ROT_OPT_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_2.frameNStart = frameN  # exact frame index
                ROT_OPT_2.tStart = t  # local t and not account for scr refresh
                ROT_OPT_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_2.started')
                # update status
                ROT_OPT_2.status = STARTED
                ROT_OPT_2.setAutoDraw(True)
            
            # if ROT_OPT_2 is active this frame...
            if ROT_OPT_2.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_3* updates
            
            # if ROT_OPT_3 is starting this frame...
            if ROT_OPT_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_3.frameNStart = frameN  # exact frame index
                ROT_OPT_3.tStart = t  # local t and not account for scr refresh
                ROT_OPT_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_3.started')
                # update status
                ROT_OPT_3.status = STARTED
                ROT_OPT_3.setAutoDraw(True)
            
            # if ROT_OPT_3 is active this frame...
            if ROT_OPT_3.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_4* updates
            
            # if ROT_OPT_4 is starting this frame...
            if ROT_OPT_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_4.frameNStart = frameN  # exact frame index
                ROT_OPT_4.tStart = t  # local t and not account for scr refresh
                ROT_OPT_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_4.started')
                # update status
                ROT_OPT_4.status = STARTED
                ROT_OPT_4.setAutoDraw(True)
            
            # if ROT_OPT_4 is active this frame...
            if ROT_OPT_4.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_5* updates
            
            # if ROT_OPT_5 is starting this frame...
            if ROT_OPT_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_5.frameNStart = frameN  # exact frame index
                ROT_OPT_5.tStart = t  # local t and not account for scr refresh
                ROT_OPT_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_5.started')
                # update status
                ROT_OPT_5.status = STARTED
                ROT_OPT_5.setAutoDraw(True)
            
            # if ROT_OPT_5 is active this frame...
            if ROT_OPT_5.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_6* updates
            
            # if ROT_OPT_6 is starting this frame...
            if ROT_OPT_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_6.frameNStart = frameN  # exact frame index
                ROT_OPT_6.tStart = t  # local t and not account for scr refresh
                ROT_OPT_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_6.started')
                # update status
                ROT_OPT_6.status = STARTED
                ROT_OPT_6.setAutoDraw(True)
            
            # if ROT_OPT_6 is active this frame...
            if ROT_OPT_6.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_7* updates
            
            # if ROT_OPT_7 is starting this frame...
            if ROT_OPT_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_7.frameNStart = frameN  # exact frame index
                ROT_OPT_7.tStart = t  # local t and not account for scr refresh
                ROT_OPT_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_7.started')
                # update status
                ROT_OPT_7.status = STARTED
                ROT_OPT_7.setAutoDraw(True)
            
            # if ROT_OPT_7 is active this frame...
            if ROT_OPT_7.status == STARTED:
                # update params
                pass
            
            # *ROT_OPT_8* updates
            
            # if ROT_OPT_8 is starting this frame...
            if ROT_OPT_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ROT_OPT_8.frameNStart = frameN  # exact frame index
                ROT_OPT_8.tStart = t  # local t and not account for scr refresh
                ROT_OPT_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ROT_OPT_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ROT_OPT_8.started')
                # update status
                ROT_OPT_8.status = STARTED
                ROT_OPT_8.setAutoDraw(True)
            
            # if ROT_OPT_8 is active this frame...
            if ROT_OPT_8.status == STARTED:
                # update params
                pass
            # *mouse_2* updates
            
            # if mouse_2 is starting this frame...
            if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_2.frameNStart = frameN  # exact frame index
                mouse_2.tStart = t  # local t and not account for scr refresh
                mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_2.started', t)
                # update status
                mouse_2.status = STARTED
                mouse_2.mouseClock.reset()
                prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
            if mouse_2.status == STARTED:  # only update if started and not finished!
                buttons = mouse_2.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([rot_pol_1, rot_pol_2, rot_pol_3, rot_pol_4, rot_pol_5, rot_pol_6, rot_pol_7, rot_pol_8], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse_2):
                                gotValidClick = True
                                mouse_2.clicked_name.append(obj.name)
                                mouse_2.clicked_name.append(obj.name)
                        # check whether click was in correct object
                        if gotValidClick:
                            _corr = 0
                            _corrAns = environmenttools.getFromNames(['rot_pol_' + str(int(ANSWER))], namespace=locals())
                            for obj in _corrAns:
                                # is this object clicked on?
                                if obj.contains(mouse_2):
                                    _corr = 1
                            mouse_2.corr.append(_corr)
                        if gotValidClick:
                            x, y = mouse_2.getPos()
                            mouse_2.x.append(float(x))
                            mouse_2.y.append(float(y))
                            buttons = mouse_2.getPressed()
                            mouse_2.leftButton.append(buttons[0])
                            mouse_2.midButton.append(buttons[1])
                            mouse_2.rightButton.append(buttons[2])
                            mouse_2.time.append(mouse_2.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=routine_3DR_trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                routine_3DR_trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if routine_3DR_trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in routine_3DR_trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "routine_3DR_trial" ---
        for thisComponent in routine_3DR_trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for routine_3DR_trial
        routine_3DR_trial.tStop = globalClock.getTime(format='float')
        routine_3DR_trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('routine_3DR_trial.stopped', routine_3DR_trial.tStop)
        # store data for ROT_trials (TrialHandler)
        ROT_trials.addData('mouse_2.x', mouse_2.x)
        ROT_trials.addData('mouse_2.y', mouse_2.y)
        ROT_trials.addData('mouse_2.leftButton', mouse_2.leftButton)
        ROT_trials.addData('mouse_2.midButton', mouse_2.midButton)
        ROT_trials.addData('mouse_2.rightButton', mouse_2.rightButton)
        ROT_trials.addData('mouse_2.time', mouse_2.time)
        ROT_trials.addData('mouse_2.corr', mouse_2.corr)
        ROT_trials.addData('mouse_2.clicked_name', mouse_2.clicked_name)
        # the Routine "routine_3DR_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisROT_trial as finished
        if hasattr(thisROT_trial, 'status'):
            thisROT_trial.status = FINISHED
        # if awaiting a pause, pause now
        if ROT_trials.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            ROT_trials.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'ROT_trials'
    ROT_trials.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    # get names of stimulus parameters
    if ROT_trials.trialList in ([], [None], None):
        params = []
    else:
        params = ROT_trials.trialList[0].keys()
    # save data for this loop
    ROT_trials.saveAsExcel(filename + '.xlsx', sheetName='ROT_trials',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # set up handler to look after randomisation of conditions etc
    MX_trials = data.TrialHandler2(
        name='MX_trials',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(
        'conditions_MX.csv', 
        selection=random(4)*11
    )
    , 
        seed=4, 
        isTrials=True, 
    )
    thisExp.addLoop(MX_trials)  # add the loop to the experiment
    thisMX_trial = MX_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMX_trial.rgb)
    if thisMX_trial != None:
        for paramName in thisMX_trial:
            globals()[paramName] = thisMX_trial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisMX_trial in MX_trials:
        MX_trials.status = STARTED
        if hasattr(thisMX_trial, 'status'):
            thisMX_trial.status = STARTED
        currentLoop = MX_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisMX_trial.rgb)
        if thisMX_trial != None:
            for paramName in thisMX_trial:
                globals()[paramName] = thisMX_trial[paramName]
        
        # --- Prepare to start Routine "routine_MX_trial" ---
        # create an object to store info about Routine routine_MX_trial
        routine_MX_trial = data.Routine(
            name='routine_MX_trial',
            components=[MX_pol_1, MX_pol_2, MX_pol_3, MX_pol_4, MX_pol_5, MX_pol_6, MX_pol_7, MX_pol_8, MX_Q, MX_image_, MX_OPT_1, MX_OPT_2, MX_OPT_3, MX_OPT_4, MX_OPT_5, MX_OPT_6, MX_OPT_7, MX_OPT_8, mouse_3],
        )
        routine_MX_trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        MX_Q.setText(QUESTION)
        MX_image_.setImage(image_file)
        MX_OPT_1.setText(str(choice1).replace('.0', ''))
        MX_OPT_2.setText(str(choice2).replace('.0', ''))
        MX_OPT_3.setText(str(choice3).replace('.0', ''))
        MX_OPT_4.setText(str(choice4).replace('.0', ''))
        MX_OPT_5.setText(str(choice5).replace('.0', ''))
        MX_OPT_6.setText(str(choice6).replace('.0', ''))
        MX_OPT_7.setText(str(choice7).replace('.0', ''))
        MX_OPT_8.setText(str(choice8).replace('.0', ''))
        # setup some python lists for storing info about the mouse_3
        mouse_3.x = []
        mouse_3.y = []
        mouse_3.leftButton = []
        mouse_3.midButton = []
        mouse_3.rightButton = []
        mouse_3.time = []
        mouse_3.corr = []
        mouse_3.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for routine_MX_trial
        routine_MX_trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        routine_MX_trial.tStart = globalClock.getTime(format='float')
        routine_MX_trial.status = STARTED
        thisExp.addData('routine_MX_trial.started', routine_MX_trial.tStart)
        routine_MX_trial.maxDuration = None
        # keep track of which components have finished
        routine_MX_trialComponents = routine_MX_trial.components
        for thisComponent in routine_MX_trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "routine_MX_trial" ---
        thisExp.currentRoutine = routine_MX_trial
        routine_MX_trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisMX_trial, 'status') and thisMX_trial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *MX_pol_1* updates
            
            # if MX_pol_1 is starting this frame...
            if MX_pol_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_1.frameNStart = frameN  # exact frame index
                MX_pol_1.tStart = t  # local t and not account for scr refresh
                MX_pol_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_1.started')
                # update status
                MX_pol_1.status = STARTED
                MX_pol_1.setAutoDraw(True)
            
            # if MX_pol_1 is active this frame...
            if MX_pol_1.status == STARTED:
                # update params
                pass
            
            # *MX_pol_2* updates
            
            # if MX_pol_2 is starting this frame...
            if MX_pol_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_2.frameNStart = frameN  # exact frame index
                MX_pol_2.tStart = t  # local t and not account for scr refresh
                MX_pol_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_2.started')
                # update status
                MX_pol_2.status = STARTED
                MX_pol_2.setAutoDraw(True)
            
            # if MX_pol_2 is active this frame...
            if MX_pol_2.status == STARTED:
                # update params
                pass
            
            # *MX_pol_3* updates
            
            # if MX_pol_3 is starting this frame...
            if MX_pol_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_3.frameNStart = frameN  # exact frame index
                MX_pol_3.tStart = t  # local t and not account for scr refresh
                MX_pol_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_3.started')
                # update status
                MX_pol_3.status = STARTED
                MX_pol_3.setAutoDraw(True)
            
            # if MX_pol_3 is active this frame...
            if MX_pol_3.status == STARTED:
                # update params
                pass
            
            # *MX_pol_4* updates
            
            # if MX_pol_4 is starting this frame...
            if MX_pol_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_4.frameNStart = frameN  # exact frame index
                MX_pol_4.tStart = t  # local t and not account for scr refresh
                MX_pol_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_4.started')
                # update status
                MX_pol_4.status = STARTED
                MX_pol_4.setAutoDraw(True)
            
            # if MX_pol_4 is active this frame...
            if MX_pol_4.status == STARTED:
                # update params
                pass
            
            # *MX_pol_5* updates
            
            # if MX_pol_5 is starting this frame...
            if MX_pol_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_5.frameNStart = frameN  # exact frame index
                MX_pol_5.tStart = t  # local t and not account for scr refresh
                MX_pol_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_5.started')
                # update status
                MX_pol_5.status = STARTED
                MX_pol_5.setAutoDraw(True)
            
            # if MX_pol_5 is active this frame...
            if MX_pol_5.status == STARTED:
                # update params
                pass
            
            # *MX_pol_6* updates
            
            # if MX_pol_6 is starting this frame...
            if MX_pol_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_6.frameNStart = frameN  # exact frame index
                MX_pol_6.tStart = t  # local t and not account for scr refresh
                MX_pol_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_6.started')
                # update status
                MX_pol_6.status = STARTED
                MX_pol_6.setAutoDraw(True)
            
            # if MX_pol_6 is active this frame...
            if MX_pol_6.status == STARTED:
                # update params
                pass
            
            # *MX_pol_7* updates
            
            # if MX_pol_7 is starting this frame...
            if MX_pol_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_7.frameNStart = frameN  # exact frame index
                MX_pol_7.tStart = t  # local t and not account for scr refresh
                MX_pol_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_7.started')
                # update status
                MX_pol_7.status = STARTED
                MX_pol_7.setAutoDraw(True)
            
            # if MX_pol_7 is active this frame...
            if MX_pol_7.status == STARTED:
                # update params
                pass
            
            # *MX_pol_8* updates
            
            # if MX_pol_8 is starting this frame...
            if MX_pol_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_pol_8.frameNStart = frameN  # exact frame index
                MX_pol_8.tStart = t  # local t and not account for scr refresh
                MX_pol_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_pol_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_pol_8.started')
                # update status
                MX_pol_8.status = STARTED
                MX_pol_8.setAutoDraw(True)
            
            # if MX_pol_8 is active this frame...
            if MX_pol_8.status == STARTED:
                # update params
                pass
            
            # *MX_Q* updates
            
            # if MX_Q is starting this frame...
            if MX_Q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_Q.frameNStart = frameN  # exact frame index
                MX_Q.tStart = t  # local t and not account for scr refresh
                MX_Q.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_Q, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_Q.started')
                # update status
                MX_Q.status = STARTED
                MX_Q.setAutoDraw(True)
            
            # if MX_Q is active this frame...
            if MX_Q.status == STARTED:
                # update params
                pass
            
            # *MX_image_* updates
            
            # if MX_image_ is starting this frame...
            if MX_image_.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_image_.frameNStart = frameN  # exact frame index
                MX_image_.tStart = t  # local t and not account for scr refresh
                MX_image_.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_image_, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_image_.started')
                # update status
                MX_image_.status = STARTED
                MX_image_.setAutoDraw(True)
            
            # if MX_image_ is active this frame...
            if MX_image_.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_1* updates
            
            # if MX_OPT_1 is starting this frame...
            if MX_OPT_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_1.frameNStart = frameN  # exact frame index
                MX_OPT_1.tStart = t  # local t and not account for scr refresh
                MX_OPT_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_1.started')
                # update status
                MX_OPT_1.status = STARTED
                MX_OPT_1.setAutoDraw(True)
            
            # if MX_OPT_1 is active this frame...
            if MX_OPT_1.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_2* updates
            
            # if MX_OPT_2 is starting this frame...
            if MX_OPT_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_2.frameNStart = frameN  # exact frame index
                MX_OPT_2.tStart = t  # local t and not account for scr refresh
                MX_OPT_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_2.started')
                # update status
                MX_OPT_2.status = STARTED
                MX_OPT_2.setAutoDraw(True)
            
            # if MX_OPT_2 is active this frame...
            if MX_OPT_2.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_3* updates
            
            # if MX_OPT_3 is starting this frame...
            if MX_OPT_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_3.frameNStart = frameN  # exact frame index
                MX_OPT_3.tStart = t  # local t and not account for scr refresh
                MX_OPT_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_3.started')
                # update status
                MX_OPT_3.status = STARTED
                MX_OPT_3.setAutoDraw(True)
            
            # if MX_OPT_3 is active this frame...
            if MX_OPT_3.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_4* updates
            
            # if MX_OPT_4 is starting this frame...
            if MX_OPT_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_4.frameNStart = frameN  # exact frame index
                MX_OPT_4.tStart = t  # local t and not account for scr refresh
                MX_OPT_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_4.started')
                # update status
                MX_OPT_4.status = STARTED
                MX_OPT_4.setAutoDraw(True)
            
            # if MX_OPT_4 is active this frame...
            if MX_OPT_4.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_5* updates
            
            # if MX_OPT_5 is starting this frame...
            if MX_OPT_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_5.frameNStart = frameN  # exact frame index
                MX_OPT_5.tStart = t  # local t and not account for scr refresh
                MX_OPT_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_5.started')
                # update status
                MX_OPT_5.status = STARTED
                MX_OPT_5.setAutoDraw(True)
            
            # if MX_OPT_5 is active this frame...
            if MX_OPT_5.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_6* updates
            
            # if MX_OPT_6 is starting this frame...
            if MX_OPT_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_6.frameNStart = frameN  # exact frame index
                MX_OPT_6.tStart = t  # local t and not account for scr refresh
                MX_OPT_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_6.started')
                # update status
                MX_OPT_6.status = STARTED
                MX_OPT_6.setAutoDraw(True)
            
            # if MX_OPT_6 is active this frame...
            if MX_OPT_6.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_7* updates
            
            # if MX_OPT_7 is starting this frame...
            if MX_OPT_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_7.frameNStart = frameN  # exact frame index
                MX_OPT_7.tStart = t  # local t and not account for scr refresh
                MX_OPT_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_7.started')
                # update status
                MX_OPT_7.status = STARTED
                MX_OPT_7.setAutoDraw(True)
            
            # if MX_OPT_7 is active this frame...
            if MX_OPT_7.status == STARTED:
                # update params
                pass
            
            # *MX_OPT_8* updates
            
            # if MX_OPT_8 is starting this frame...
            if MX_OPT_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                MX_OPT_8.frameNStart = frameN  # exact frame index
                MX_OPT_8.tStart = t  # local t and not account for scr refresh
                MX_OPT_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MX_OPT_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'MX_OPT_8.started')
                # update status
                MX_OPT_8.status = STARTED
                MX_OPT_8.setAutoDraw(True)
            
            # if MX_OPT_8 is active this frame...
            if MX_OPT_8.status == STARTED:
                # update params
                pass
            # *mouse_3* updates
            
            # if mouse_3 is starting this frame...
            if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_3.frameNStart = frameN  # exact frame index
                mouse_3.tStart = t  # local t and not account for scr refresh
                mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_3.started', t)
                # update status
                mouse_3.status = STARTED
                mouse_3.mouseClock.reset()
                prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
            if mouse_3.status == STARTED:  # only update if started and not finished!
                buttons = mouse_3.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([MX_pol_1, MX_pol_2, MX_pol_3, MX_pol_4, MX_pol_5, MX_pol_6, MX_pol_7, MX_pol_8], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse_3):
                                gotValidClick = True
                                mouse_3.clicked_name.append(obj.name)
                                mouse_3.clicked_name.append(obj.name)
                        # check whether click was in correct object
                        if gotValidClick:
                            _corr = 0
                            _corrAns = environmenttools.getFromNames(['MX_pol_%i' %int(ANSWER)], namespace=locals())
                            for obj in _corrAns:
                                # is this object clicked on?
                                if obj.contains(mouse_3):
                                    _corr = 1
                            mouse_3.corr.append(_corr)
                        if gotValidClick:
                            x, y = mouse_3.getPos()
                            mouse_3.x.append(float(x))
                            mouse_3.y.append(float(y))
                            buttons = mouse_3.getPressed()
                            mouse_3.leftButton.append(buttons[0])
                            mouse_3.midButton.append(buttons[1])
                            mouse_3.rightButton.append(buttons[2])
                            mouse_3.time.append(mouse_3.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=routine_MX_trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                routine_MX_trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if routine_MX_trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in routine_MX_trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "routine_MX_trial" ---
        for thisComponent in routine_MX_trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for routine_MX_trial
        routine_MX_trial.tStop = globalClock.getTime(format='float')
        routine_MX_trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('routine_MX_trial.stopped', routine_MX_trial.tStop)
        # store data for MX_trials (TrialHandler)
        MX_trials.addData('mouse_3.x', mouse_3.x)
        MX_trials.addData('mouse_3.y', mouse_3.y)
        MX_trials.addData('mouse_3.leftButton', mouse_3.leftButton)
        MX_trials.addData('mouse_3.midButton', mouse_3.midButton)
        MX_trials.addData('mouse_3.rightButton', mouse_3.rightButton)
        MX_trials.addData('mouse_3.time', mouse_3.time)
        MX_trials.addData('mouse_3.corr', mouse_3.corr)
        MX_trials.addData('mouse_3.clicked_name', mouse_3.clicked_name)
        # the Routine "routine_MX_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisMX_trial as finished
        if hasattr(thisMX_trial, 'status'):
            thisMX_trial.status = FINISHED
        # if awaiting a pause, pause now
        if MX_trials.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            MX_trials.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'MX_trials'
    MX_trials.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    # get names of stimulus parameters
    if MX_trials.trialList in ([], [None], None):
        params = []
    else:
        params = MX_trials.trialList[0].keys()
    # save data for this loop
    MX_trials.saveAsExcel(filename + '.xlsx', sheetName='MX_trials',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # --- Prepare to start Routine "end" ---
    # create an object to store info about Routine end
    end = data.Routine(
        name='end',
        components=[text],
    )
    end.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for end
    end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end.tStart = globalClock.getTime(format='float')
    end.status = STARTED
    thisExp.addData('end.started', end.tStart)
    end.maxDuration = None
    # keep track of which components have finished
    endComponents = end.components
    for thisComponent in end.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    thisExp.currentRoutine = end
    end.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # if text is stopping this frame...
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.tStopRefresh = tThisFlipGlobal  # on global time
                text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.stopped')
                # update status
                text.status = FINISHED
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=end,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            end.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if end.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in end.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in end.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end
    end.tStop = globalClock.getTime(format='float')
    end.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end.stopped', end.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if end.maxDurationReached:
        routineTimer.addTime(-end.maxDuration)
    elif end.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "DataSaving" ---
    # create an object to store info about Routine DataSaving
    DataSaving = data.Routine(
        name='DataSaving',
        components=[],
    )
    DataSaving.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for DataSaving
    DataSaving.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    DataSaving.tStart = globalClock.getTime(format='float')
    DataSaving.status = STARTED
    thisExp.addData('DataSaving.started', DataSaving.tStart)
    DataSaving.maxDuration = None
    # keep track of which components have finished
    DataSavingComponents = DataSaving.components
    for thisComponent in DataSaving.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "DataSaving" ---
    thisExp.currentRoutine = DataSaving
    DataSaving.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=DataSaving,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            DataSaving.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if DataSaving.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in DataSaving.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "DataSaving" ---
    for thisComponent in DataSaving.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for DataSaving
    DataSaving.tStop = globalClock.getTime(format='float')
    DataSaving.tStopRefresh = tThisFlipGlobal
    thisExp.addData('DataSaving.stopped', DataSaving.tStop)
    thisExp.nextEntry()
    # the Routine "DataSaving" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    # stop any playback components
    if thisExp.currentRoutine is not None:
        for comp in thisExp.currentRoutine.getPlaybackComponents():
            comp.stop()
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
