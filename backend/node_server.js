/************************** Import library/fungsi ****************************/
//library serialport
var serialport = require('serialport');

//library untuk server tempat buffer serta koneksi mysql
const express = require('express');

//library yang memperbolehkan CORS
const cors = require('cors');

//library untuk (format) timestamp
var moment  = require('moment');

/************************ Deklarasi objek/variabel ***************************/
// variabel default
var ConfigDefault = [
    {
        DEVICE_NAME: 'Device 1',
        DEVICE_VISIBLE: true,
        DEVICE_INDEX: 1,
        GROUPTAG_LIST: [
            {
                GROUPTAG_NAME: 'Group Tag 1A',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 1,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 1200,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1B',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 2,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1C',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 3,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1D',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 4,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1E',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 5,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1F',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 6,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1G',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 7,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 1H',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 8,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
        ]
    },
    {
        DEVICE_NAME: 'Device 2',
        DEVICE_VISIBLE: true,
        DEVICE_INDEX: 2,
        GROUPTAG_LIST: [
            {
                GROUPTAG_NAME: 'Group Tag 2A',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 1,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2B',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 2,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2C',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 3,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2D',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 4,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2E',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 5,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2F',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 6,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2G',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 7,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 2H',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 8,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
        ]
    },
    {
        DEVICE_NAME: 'Device 3',
        DEVICE_VISIBLE: true,
        DEVICE_INDEX: 3,
        GROUPTAG_LIST: [
            {
                GROUPTAG_NAME: 'Group Tag 3A',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 1,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3B',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 2,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3C',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 3,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3D',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 4,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3E',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 5,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3F',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 6,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3G',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 7,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 3H',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 8,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
        ]
    },
    {
        DEVICE_NAME: 'Device 4',
        DEVICE_VISIBLE: true,
        DEVICE_INDEX: 4,
        GROUPTAG_LIST: [
            {
                GROUPTAG_NAME: 'Group Tag 4A',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 1,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4B',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 2,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4C',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 3,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4D',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 4,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4E',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 5,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4F',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 6,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4G',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 7,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ]
            },
            {
                GROUPTAG_NAME: 'Group Tag 4H',
                GROUPTAG_VISIBLE: true,
                GROUPTAG_INDEX: 8,
                GROUPTAG_PLOTCONFIG: {
                    X_AXIS_SPAN: 10,
                    X_AXIS_UNIT: 'secs',
                    X_AXIS_SAMPLEPERSPAN: 10,
                    X_AXIS_NUMBERDIV: 10,
                    X_AXIS_LABEL:'X Axis',
                    Y_AXIS_TYPE: 'EU',
                    Y_AXIS_MINVAL: 0,
                    Y_AXIS_MAXVAL: 65535,
                    Y_AXIS_NUMBERDIV: 10,
                    Y_AXIS_LABEL:'Y Axis',
                },
                TAG_LIST: [
                    {
                        TAG_NAME: 'Tag 1',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 2',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 3',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 4',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 5',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 6',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 7',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                    {
                        TAG_NAME: 'Tag 8',
                        TAG_VISIBLE: true,
                        TAG_DATASOURCE: 'dummy',
                        TAG_INDEX: 0,
                        TAG_MINVAL: 0,
                        TAG_MAXVAL: 65535,
                        TAG_MINEU: 0,
                        TAG_MAXEU: 65535,
                        TAG_EU: 'Analog'
                    },
                ] // JS : end of TAG_LIST
            },
        ] // JS : end of GROUPTAG_LIST
    },
];// JS : end of ConfigDefault

//Buffer data battery monitoring dari serial
var Buff_Unit_A1 = [
    [0],[0],[0],[0],[0],
    [0],[0],
    [0],[0]
];
var timestampBuff_Unit_A1 = [
    [0],[0],[0],[0],[0],
    [0],[0],
    [0],[0]
];
var currentBuff_Unit_A1 = [
    [0],[0],[0],[0],[0],
    [0],[0],
    [0],[0]
];
const dataLimit = 20;
const normalDataLimit = 100;
// Jumlah data, atau jumlah kolom
// ada 4 tegangan 1 arus (baterai) + 2 (motor) + 2 (controller)
// 5 data + 2 data + 2 data = 9
const seriesCount = 9;

// variabel buffer versi baru
var currentBuffer = {
    data:[],
    timestamp:'',
};

var currentBufferArduinoUnmerged = {
    data:[],
    timestamp:'',   
};

var currentBufferArduino = {
    data:[],
    timestamp:'',   
};

// deklarasi buffer konfigurasi plot
var currentConfig = {
    TAG_LIST: ConfigDefault,
};

//deklarasi objek serial
var portName = "COM3";
var myPort = new serialport(portName,{
    baudRate:9600
});
var serial_counter = 10;
var iter=0;

//deklarasi objek server (data ke webserver)
const app = express();
const port = 5000;

/************************ Deklarasi fungsi/event ***************************/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function GenerateRandom(currentbuffer) {
    for(var i=0;i<256;i++){
        currentbuffer.data[i] = getRndInteger(800,1500);
    }
    currentbuffer.timestamp = String(moment().format('hh:mm:ss'));

    return currentbuffer;
}

/*
 * 1. Data dari device ke webserver
 */
function StoreToBuffer(currentBuff,Buff,Timestamp){
    for(var i=0;i<seriesCount;i++){
        if((Buff[i].length)>dataLimit){
            Buff[i].shift();
            Buff[i][dataLimit] = currentBuff[i][0];
            Timestamp[i].shift();
            Timestamp[i][dataLimit] = String(moment().format('hh:mm:ss'));
        }
        else{
            Buff[i][Buff[i].length] = currentBuff[i][0];
            Timestamp[i][Timestamp[i].length] = String(moment().format('hh:mm:ss'));
        }
    }
    return [Buff,Timestamp];
}

//event listener untuk mengoper data dari serial ke server
function expressGETBuffer(){
    GenerateRandom(currentBuffer);
    app.get('/api/buffer',(req,res) =>{
        res.json({
            arduino: currentBufferArduino,
            dummy: currentBuffer
        });
    });
    //console.log("2a. GET to Server");
}

//event listener untuk mengoper data konfigurasi kembali ke react
function expressGETConfig(){
    app.get('/api/config',(req,res) =>{
        res.json(currentConfig.TAG_LIST);
    });
    //console.log("2a. GET to Server");
}

//event Listener bila ada serial masuk dari Arduini
myPort.on("data", (line) => {
    //console.log("1a. Serial data Acquired");
    iter +=1;
    //ubah tipe data Buffer Javascript jadi Array
    bufferArray = [...line];
    
    /*
    //satukan data buffer menjadi integer
    V1_int = (bufferArray[1]<<8) | bufferArray[0];
    V2_int = (bufferArray[3]<<8) | bufferArray[2];
    V3_int = (bufferArray[5]<<8) | bufferArray[4];
    V4_int = (bufferArray[7]<<8) | bufferArray[6];
    Arus_int = (bufferArray[9]<<8) | bufferArray[8];
    VM1_int = (bufferArray[11]<<8) | bufferArray[10];
    VM2_int = (bufferArray[13]<<8) | bufferArray[12];
    VC1_int = (bufferArray[15]<<8) | bufferArray[14];
    VC2_int = (bufferArray[17]<<8) | bufferArray[16];

    //konversi integer ke float    
    V1 = V1_int/100.0; if(V1>normalDataLimit) V1=0;
    V2 = V2_int/100.0; if(V2>normalDataLimit) V2=0;
    V3 = V3_int/100.0; if(V3>normalDataLimit) V3=0;
    V4 = V4_int/100.0; if(V4>normalDataLimit) V4=0;
    
    Arus = Arus_int/100.0;

    VM1 = VM1_int/100.0; if(VM1>normalDataLimit) VM1=0;
    VM2 = VM2_int/100.0; if(VM2>normalDataLimit) VM2=0;
    VC1 = VC1_int/100.0; if(VC1>normalDataLimit) VC1=0;
    VC2 = VC2_int/100.0; if(VC2>normalDataLimit) VC2=0;
    //console.log("1b. Serial data Converted");

    //masukkan ke buffer agar dapat diakses chart dan server
    currentBuff_Unit_A1 = [[V1],[V2],[V3],[V4],[Arus],[VM1],[VM2],[VC1],[VC2]];
    StoreToBuffer(currentBuff_Unit_A1,Buff_Unit_A1,timestampBuff_Unit_A1);
    //console.log("1c. Serial data Stored to Buffer");
    */
    if (iter<17){
        if(iter===0) currentBufferArduinoUnmerged.data = bufferArray;
        else currentBufferArduinoUnmerged.data = currentBufferArduinoUnmerged.data.concat(bufferArray);
        //console.log(bufferArray);
    }
    else if (iter===17){
        currentBufferArduinoUnmerged.timestamp = String(moment().format('hh:mm:ss'));
    
        for(var gabung=0; gabung<256; gabung++){
            currentBufferArduinoUnmerged.data[gabung] = currentBufferArduinoUnmerged.data[2*gabung] | currentBufferArduinoUnmerged.data[2*gabung+1]<<8;
        }
        currentBufferArduino.data = currentBufferArduinoUnmerged.data.slice(0,256);
        //console.log(currentBufferArduino);
        // JS : KELUARKAN DATANYA DI SINI

        currentBufferArduinoUnmerged.data = [];

        iter=0;
    }
    //debug
    /*
    console.log(bufferArray);
    console.log(`iter:${iter}`);
    console.log(`Arus : ${Arus}`);
    console.log('V1 : '+ String(V1));
    console.log(`V2 : ${V2}`);
    */
});

myPort.on("close",() => {
    console.log("RECON coz close");
    myPort.resume();
});

myPort.on("error",() => {
    console.log("RECON coz error");
    myPort.resume();
});

/*
 * 2. Data dari webserver ke device
 */
function expressPOSTBuffer(){
    app.post('/api/request', (req, res) => {
        currentConfig = {
          TAG_LIST: req.body.TAG_LIST,
        };
      
        //requests.push(newRequest);
        //console.log(newRequest.TAG_LIST[2].GROUPTAG_LIST[4].TAG_LIST);
      });
    expressGETConfig();
}
/****************************** Main Loop ***********************************/
app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

// ekivalen dengan void setup(), dijalankan sekali
expressGETConfig();
expressPOSTBuffer();

// ekivalen dengan void loop(), dijalankan berulang kali
//untuk polling data tiap x detik
function pollData(){
    serial_counter +=1;

    //console.log(`\n-------------------- NEW LOOP #${iter} --------------------\n`);
    if(serial_counter===20){
        pollCharacter = [0x11];
        //console.log("1. Polled Serial Port");
        myPort.write(pollCharacter);
        serial_counter=0;
    }
    //console.log("2. GET Procedure");
    expressGETBuffer();
    expressGETConfig();
    //expressPOSTBuffer();
}
setInterval(pollData,100);

/******************** Finalisasi (nyalakan server) *************************/
app.listen(port, () => console.log(`Server 1 started on port ${port}`));