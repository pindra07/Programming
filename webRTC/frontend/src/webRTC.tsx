

const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints)
}

try {
    const stream = openMediaDevices({'video': true, 'audio': true});
    console.log("Got MediaStream:", stream)
}

catch (error) {
    console.log('Error accessing media devices.', error)
}

async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

const videoCameras = getConnectedDevices('videoinput');
console.log('Cameras Found', videoCameras)

