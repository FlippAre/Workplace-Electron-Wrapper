var os = require('os')
var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var workplaceMac = {
    name: 'Workplace', // will be inferred if not specified
    targetUrl: 'https://lundalogik.facebook.com/', // required
    out: './build/mac/wp',
    icon: './workplace.icns',
    counter: true,
    platform: "mac",
    //inject: ['./inject-workplace.css']
};

nativefier(workplaceMac, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});

// possible options, defaults unless specified otherwise
var workplaceChattMac = {
    name: 'Work Chat', // will be inferred if not specified
    targetUrl: 'https://lundalogik.facebook.com/chat/t/', // required
    out: './build/mac/chatt',
    icon: './chatt.icns',
    platform: "mac",
    counter: true,
    inject: ['./inject-work-chat.css']
};

nativefier(workplaceChattMac, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});

// possible options, defaults unless specified otherwise
var workplaceWin = {
    name: 'Workplace', // will be inferred if not specified
    targetUrl: 'https://lundalogik.facebook.com/', // required
    out: './build/win/workplace',
    icon: './workplace.ico',
    platform: "win32",
    //inject: ['./inject-workplace.css']
};

nativefier(workplaceWin, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});

var workplaceChattWin = {
    name: 'Work Chat', // will be inferred if not specified
    targetUrl: 'https://lundalogik.facebook.com/chat/t/', // required
    out: './build/win/chatt',
    platform: "win32",
    icon: './chatt.ico',
    counter: true,
    inject: ['./inject-work-chat.css']
};

nativefier(workplaceChattWin, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});