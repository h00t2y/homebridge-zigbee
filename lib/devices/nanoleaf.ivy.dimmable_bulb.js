const HomeKitDevice = require('../HomeKitDevice')

class NanoleafIvyDimmableBulb extends HomeKitDevice {
  static get description() {
    return {
      model: [
        'NL08-0800',
      ],
      manufacturer: 'Nanoleaf',
      name: 'Nanoleaf',
    }
  }

  getAvailbleServices() {
    return [{
      name: 'Bulb',
      type: 'Lightbulb',
    }]
  }

  onDeviceReady() {
    this.mountServiceCharacteristic({
      endpoint: 1,
      cluster: 'genOnOff',
      service: 'Bulb',
      characteristic: 'On',
      reportMinInt: 1,
      reportMaxInt: 300,
      reportChange: 1,
      parser: 'onOff',
    })
    this.mountServiceCharacteristic({
      endpoint: 1,
      cluster: 'genLevelCtrl',
      service: 'Bulb',
      characteristic: 'Brightness',
      reportMinInt: 1,
      reportMaxInt: 300,
      reportChange: 1,
      parser: 'dim',
    })
  }
}

module.exports = NanoleafIvyDimmableBulb
