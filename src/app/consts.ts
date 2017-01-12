import {Injectable} from "@angular/core";

@Injectable()
export class Consts {
    // Project Constants
    //public BaseApiUrl: string = "http://resgridapi.local";
    public BaseApiUrl: string = "https://api.resgrid.com";
    public ResgridApiUrl: string = this.BaseApiUrl + "/api/v3";
    public Version: string = "2.0.0";
    public IsDemo: boolean = false;
    public DemoToken: string = 'S2RoUU1jSFRFbU1oeHVmS0RCei9xUVk1STQxTnFObktTVmJ5V0NHMWxXTT0=';
    // Events
    public Events_UserLoggedIn: string = "user:login";
    public Events_SystemReady: string = "system:ready";

    // API Keys
    public What3WordsKey: string = "HIDDEN";

	public EVENTS = {
		COREDATASYNCED: 'coreDataSynced',
		LOCAL_DATA_SET: 'localDataSet',
		SETTINGS_SAVED: 'settingsSaved',
		MESSAGE_RECIPIENT_ADDED: 'messageRecipientAdded',
		REGISTRATION_OPERATION_FINISHED: 'registrationOperationFinished',
		CORDOVA_DEVICE_RESUMED: 'onResumeCordova',
		CORDOVA_DEVICE_PAUSED: 'onPauseCordova',
		HIDE_SPLASH_SCREEN: 'hideSplashScreen',
		STATUS_UPDATED: 'statusUpdated'
	}

	public STATUS = {
		STANDINGBY: 0,
		NOTRESPONDING: 1,
		RESPONDING: 2,
		ONSCENE: 3,
		AVAILABLESTATION: 4,
		RESPONDINGTOSTATION: 5,
		RESPONDINGTOSCENE: 6
	}

	public STAFFING = {
		NORMAL: 0,
		DELAYED: 1,
		UNAVAILABLE: 2,
		COMMITTED: 3,
		ONSHIFT: 4
	}

	public DETAILTYPES = {
		NONE: 0,
		STATIONS: 1,
		CALLS: 2,
		CALLSANDSTATIONS: 3
	}

	public NOTETYPES = {
		NONE: 0,
		OPTIONAL: 1,
		REQUIRED: 2
	}

	public CUSTOMTYPES = {
		PERSONNEL: 1,
		UNIT: 2,
		STAFFING: 3
	}

	public MESSAGETYPES = {
		NORMAL: 0,
		CALLBACK: 1,
		POLL: 2
	}
}