(function () {
    'use strict';
    angular.module('ariaNg').constant('aria2AllOptions', {
        // Aria2 Option Definition EXAMPLE:
        // 'option key': {
        //     [since: '',] //This option is supported by this or higher aria2 version
        //     type: 'string|integer|float|text|boolean|option',
        //     [suffix: 'Bytes|Milliseconds|Seconds|Minutes|Hours',]
        //     [readonly: true|false,] //default: false
        //     [defaultValue: '',]
        //     [required: true|false,] //default: false
        //     [separator: '',] //SUPPORT 'text' type
        //     [overrideMode: 'override|append',] //default: override
        //     [submitFormat: 'string|array',] //default: string, parameter 'separator' is required
        //     [showCount: true|false,] //SUPPORT 'text' type, parameter 'separator' is required, default: false
        //     [trimCount: true|false,] //SUPPORT 'text' type, parameter 'separator', 'showCount' is required, default: false
        //     [options: [],] //SUPPORT 'option' type
        //     [min: 0,] //SUPPORT 'integer', 'float' type
        //     [max: 0,] //SUPPORT 'integer', 'float' type
        //     [pattern: '']
        // }
        'gid': {
            type: 'string',
            readonly: true,
            required: true
        },
        'dir': {
            type: 'string',
            defaultValue: '.',
            required: true
        },
        'log': {
            type: 'string',
            required: true
        },
        'max-concurrent-downloads': {
            type: 'integer',
            defaultValue: '5',
            required: true,
            min: 1,
            max: 1000
        },
        'check-integrity': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'continue': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'all-proxy': {
            type: 'string'
        },
        'all-proxy-user': {
            type: 'string'
        },
        'all-proxy-passwd': {
            type: 'string'
        },
        'checksum': {
            type: 'string',
            required: true,
            pattern: '^(md5|sha-(1|224|256|384|512))=[a-zA-Z0-9]+$'
        },
        'connect-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '60',
            required: true,
            min: 1,
            max: 600
        },
        'dry-run': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'lowest-speed-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'max-connection-per-server': {
            type: 'integer',
            defaultValue: '16',
            required: true,
            min: 1,
            max: 256
        },
        'max-file-not-found': {
            type: 'integer',
            defaultValue: '0',
            required: true,
            min: 0
        },
        'max-tries': {
            type: 'integer',
            defaultValue: '5',
            required: true,
            min: 0
        },
        'min-split-size': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '1M',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'netrc-path': {
            type: 'string',
            readonly: true
        },
        'no-netrc': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'no-proxy': {
            type: 'text',
            separator: ',',
            showCount: true
        },
        'out': {
            type: 'string'
        },
        'remote-time': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'retry-wait': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '0',
            required: true,
            min: 0,
            max: 600
        },
        'split': {
            type: 'integer',
            defaultValue: '16',
            required: true,
            min: 1,
            max: 256
        },
        'timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '60',
            required: true,
            min: 1,
            max: 600
        },
        'check-certificate': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'http-accept-gzip': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'http-no-cache': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'http-user': {
            type: 'string'
        },
        'http-passwd': {
            type: 'string'
        },
        'http-proxy': {
            type: 'string'
        },
        'http-proxy-user': {
            type: 'string'
        },
        'http-proxy-passwd': {
            type: 'string'
        },
        'https-proxy': {
            type: 'string'
        },
        'https-proxy-user': {
            type: 'string'
        },
        'https-proxy-passwd': {
            type: 'string'
        },
        'referer': {
            type: 'string'
        },
        'enable-http-keep-alive': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'header': {
            type: 'text',
            separator: '\n',
            overrideMode: 'append',
            submitFormat: 'array',
            showCount: true,
            trimCount: true
        },
        'save-cookies': {
            type: 'string'
        },
        'user-agent': {
            type: 'string',
            defaultValue: 'aria2-next'
        },
        'show-files': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'bt-enable-lpd': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'bt-exclude-tracker': {
            type: 'text',
            separator: ',',
            showCount: true
        },
        'bt-external-ip': {
            type: 'string'
        },
        'bt-max-peers': {
            type: 'integer',
            defaultValue: '100',
            required: true,
            min: 0,
            max: 65535
        },
        'bt-seed-unverified': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-tracker': {
            type: 'text',
            separator: ',',
            showCount: true
        },
        'enable-dht': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'enable-peer-exchange': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'follow-torrent': {
            type: 'option',
            defaultValue: 'true',
            required: true,
            options: ['true', 'mem', 'false']
        },
        'listen-port': {
            type: 'integer',
            readonly: true,
            defaultValue: '6881',
            min: 1,
            max: 65535
        },
        'max-overall-upload-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'max-upload-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'seed-ratio': {
            type: 'float',
            defaultValue: '1.0',
            required: true
        },
        'seed-time': {
            type: 'float',
            suffix: 'Minutes',
            required: true
        },
        'follow-metalink': {
            type: 'option',
            defaultValue: 'true',
            required: true,
            options: ['true', 'mem', 'false']
        },
        'enable-rpc': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'pause-metadata': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'rpc-allow-origin-all': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'rpc-listen-all': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'rpc-listen-port': {
            type: 'integer',
            readonly: true,
            defaultValue: '6800',
            min: 1024,
            max: 65535
        },
        'rpc-max-request-size': {
            type: 'string',
            suffix: 'Bytes',
            readonly: true,
            defaultValue: '2M',
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'rpc-save-upload-metadata': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'allow-overwrite': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'auto-file-renaming': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'conf-path': {
            type: 'string',
            readonly: true
        },
        'console-log-level': {
            type: 'option',
            readonly: true,
            defaultValue: 'notice',
            options: ['debug', 'info', 'notice', 'warn', 'error']
        },
        'daemon': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'disable-ipv6': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'download-result': {
            type: 'option',
            defaultValue: 'default',
            required: true,
            options: ['default', 'full', 'hide']
        },
        'enable-color': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'file-allocation': {
            type: 'option',
            defaultValue: 'none',
            required: true,
            options: ['none', 'prealloc', 'falloc', 'trunc']
        },
        'force-save': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'save-not-found': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'hash-check-only': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'keep-unfinished-download-result': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'max-download-result': {
            type: 'integer',
            defaultValue: '1000',
            required: true,
            min: 0
        },
        'min-tls-version': {
            type: 'option',
            readonly: true,
            defaultValue: 'TLSv1.2',
            options: ['TLSv1.1', 'TLSv1.2', 'TLSv1.3']
        },
        'log-level': {
            type: 'option',
            defaultValue: 'debug',
            required: true,
            options: ['debug', 'info', 'notice', 'warn', 'error']
        },
        'show-console-readout': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'summary-interval': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '60',
            min: 0
        },
        'max-overall-download-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'max-download-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'no-conf': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'quiet': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'remove-control-file': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'save-session': {
            type: 'string'
        },
        'save-session-interval': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '0',
            min: 0
        },
        'stop': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '0',
            min: 0
        },
        'load-cookies': {
            type: 'string'
        },
        'ca-certificate': {
            type: 'string'
        },
        'certificate': {
            type: 'string'
        },
        'private-key': {
            type: 'string'
        },
        'dns-over-https': {
            type: 'string'
        },
        'interface': {
            type: 'string'
        },
        'sftp-user': {
            type: 'string'
        },
        'sftp-passwd': {
            type: 'string'
        },
        'ssh-host-key-sha256': {
            type: 'string'
        },
        'filename-hint': {
            type: 'string',
            readonly: true
        },
        'filename-hint-source': {
            type: 'option',
            readonly: true,
            defaultValue: 'suggested',
            options: ['browser', 'title', 'suggested']
        },
        'incomplete-suffix': {
            type: 'string'
        },
        'auto-file-renaming-style': {
            type: 'option',
            defaultValue: 'dot',
            options: ['dot', 'parentheses']
        },
        'index-out': {
            type: 'text',
            readonly: true,
            separator: '\n',
            overrideMode: 'append',
            submitFormat: 'array',
            showCount: true,
            trimCount: true
        },
        'bt-port-mapping': {
            type: 'boolean',
            defaultValue: 'true'
        },
        'bt-encryption': {
            type: 'option',
            defaultValue: 'preferred',
            options: ['preferred', 'required', 'disabled']
        },
        'bt-transport': {
            type: 'option',
            defaultValue: 'both',
            options: ['tcp', 'utp', 'both']
        },
        'bt-max-connections': {
            type: 'integer',
            defaultValue: '500',
            min: 2,
            max: 65535
        },
        'bt-max-uploads': {
            type: 'integer',
            defaultValue: '20',
            min: 1,
            max: 65535
        },
        'bt-max-uploads-per-torrent': {
            type: 'integer',
            defaultValue: '4',
            min: 1,
            max: 65535
        },
        'bt-super-seeding': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'bt-first-last-piece-first': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'bt-file-priority': {
            type: 'string',
            readonly: true
        },
        'force-sequential': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'detach-share-only': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'bt-external-port': {
            type: 'integer',
            defaultValue: '0',
            min: 0,
            max: 65535
        },
        'bt-interface': {
            type: 'text',
            separator: ',',
            showCount: true
        },
        'bt-proxy': {
            type: 'string'
        },
        'bt-anonymous-mode': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'bt-user-agent': {
            type: 'string',
            defaultValue: 'qBittorrent/5.2.3'
        },
        'bt-peer-id-prefix': {
            type: 'string',
            defaultValue: '-qB5230-'
        },
        'bt-peer-blocklist': {
            type: 'string'
        },
        'bt-blocklist-scope': {
            type: 'option',
            defaultValue: 'peers',
            options: ['peers', 'peers-and-trackers', 'all']
        },
        'bt-rate-limit-overhead': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'bt-dht-bootstrap-nodes': {
            type: 'text',
            defaultValue: 'dht.libtorrent.org:25401,dht.transmissionbt.com:6881,router.bittorrent.com:6881,router.utorrent.com:6881',
            separator: ',',
            showCount: true
        },
        'ed2k-server': {
            type: 'text',
            separator: ',',
            showCount: true
        },
        'ed2k-server-list': {
            type: 'string'
        },
        'ed2k-node-list': {
            type: 'string'
        },
        'ed2k-listen-port': {
            type: 'integer',
            defaultValue: '4662',
            min: 0,
            max: 65535
        },
        'ed2k-udp-listen-port': {
            type: 'integer',
            defaultValue: '4672',
            min: 0,
            max: 65535
        },
        'ed2k-port-mapping': {
            type: 'boolean',
            defaultValue: 'true'
        },
        'ed2k-upload-slots': {
            type: 'integer',
            defaultValue: '3',
            min: 1,
            max: 1000
        },
        'ed2k-max-connections': {
            type: 'integer',
            defaultValue: '100',
            min: 1,
            max: 4096
        },
        'ed2k-preview-priority': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'media': {
            type: 'option',
            defaultValue: 'auto',
            options: ['auto', 'file', 'hls', 'dash', 'collection']
        },
        'media-format': {
            type: 'option',
            defaultValue: 'mp4',
            options: ['mp4', 'mkv', 'vtt']
        },
        'media-video': {
            type: 'string',
            defaultValue: 'best'
        },
        'media-audio': {
            type: 'string',
            defaultValue: 'best'
        },
        'media-subtitles': {
            type: 'string',
            defaultValue: 'none'
        },
        'media-pause-after-probe': {
            type: 'boolean',
            defaultValue: 'false'
        },
        'media-record-time': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '0',
            min: 0,
            max: 31536000
        },
        'media-start-time': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '0',
            min: 0,
            max: 31536000
        },
        'media-end-time': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '0',
            min: 0,
            max: 31536000
        },
        'media-request-contexts': {
            type: 'string',
            readonly: true
        },
        'media-input': {
            type: 'string',
            readonly: true
        },
        'rpc-secret': {
            type: 'string',
            readonly: true
        },
        'pause': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'state-dir': {
            type: 'string'
        },
        'state-save-interval': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '10',
            min: 1,
            max: 600
        },
        'stop-with-process': {
            type: 'integer',
            defaultValue: '0',
            min: 0
        },
        'log-max-size': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '10M',
            pattern: '^(0|[1-9]\\d*(K|k|M|m)?)$'
        },
        'log-max-files': {
            type: 'integer',
            defaultValue: '4',
            min: 1,
            max: 64
        },
        'on-download-start': {
            type: 'string'
        },
        'on-download-pause': {
            type: 'string'
        },
        'on-download-stop': {
            type: 'string'
        },
        'on-download-complete': {
            type: 'string'
        },
        'on-download-error': {
            type: 'string'
        },
        'on-bt-download-complete': {
            type: 'string'
        }
    }).constant('aria2GlobalAvailableOptions', {
        // Aria2 Setting Page Definition EXAMPLE:
        // 'category key': [
        //     'option key 1', 'option key 2', // more options if possible
        // ]
        basicOptions: [
            'dir', 'log', 'max-concurrent-downloads', 'check-integrity', 'continue'
        ],
        httpFtpSFtpOptions: [
            'all-proxy', 'all-proxy-user', 'all-proxy-passwd', 'connect-timeout', 'dry-run', 'lowest-speed-limit',
            'max-connection-per-server', 'max-file-not-found', 'max-tries', 'min-split-size', 'netrc-path', 'no-netrc',
            'no-proxy', 'remote-time', 'retry-wait', 'split', 'timeout'
        ],
        httpOptions: [
            'check-certificate', 'http-accept-gzip', 'http-no-cache', 'http-user', 'http-passwd', 'http-proxy',
            'http-proxy-user', 'http-proxy-passwd', 'https-proxy', 'https-proxy-user', 'https-proxy-passwd', 'referer',
            'enable-http-keep-alive', 'header', 'save-cookies', 'user-agent', 'load-cookies', 'ca-certificate', 'certificate',
            'private-key', 'dns-over-https', 'interface', 'media', 'media-format', 'media-video', 'media-audio',
            'media-subtitles', 'media-pause-after-probe', 'media-record-time'
        ],
        ftpSFtpOptions: [
            'sftp-user', 'sftp-passwd', 'ssh-host-key-sha256'
        ],
        btOptions: [
            'bt-enable-lpd', 'bt-exclude-tracker', 'bt-external-ip', 'bt-max-peers', 'bt-seed-unverified', 'bt-tracker',
            'enable-dht', 'enable-peer-exchange', 'follow-torrent', 'listen-port', 'max-overall-upload-limit',
            'max-upload-limit', 'seed-ratio', 'seed-time', 'bt-port-mapping', 'bt-encryption', 'bt-transport',
            'bt-max-connections', 'bt-max-uploads', 'bt-max-uploads-per-torrent', 'bt-super-seeding',
            'bt-first-last-piece-first', 'force-sequential', 'detach-share-only', 'bt-external-port', 'bt-interface', 'bt-proxy',
            'bt-anonymous-mode', 'bt-user-agent', 'bt-peer-id-prefix', 'bt-peer-blocklist', 'bt-blocklist-scope',
            'bt-rate-limit-overhead', 'bt-dht-bootstrap-nodes', 'ed2k-server', 'ed2k-server-list', 'ed2k-node-list',
            'ed2k-listen-port', 'ed2k-udp-listen-port', 'ed2k-port-mapping', 'ed2k-upload-slots', 'ed2k-max-connections',
            'ed2k-preview-priority'
        ],
        metalinkOptions: [
            'follow-metalink'
        ],
        rpcOptions: [
            'enable-rpc', 'pause-metadata', 'rpc-allow-origin-all', 'rpc-listen-all', 'rpc-listen-port', 'rpc-max-request-size',
            'rpc-save-upload-metadata'
        ],
        advancedOptions: [
            'allow-overwrite', 'auto-file-renaming', 'conf-path', 'console-log-level', 'daemon', 'disable-ipv6',
            'download-result', 'enable-color', 'file-allocation', 'force-save', 'save-not-found', 'hash-check-only',
            'keep-unfinished-download-result', 'max-download-result', 'min-tls-version', 'log-level', 'show-console-readout',
            'summary-interval', 'max-overall-download-limit', 'max-download-limit', 'no-conf', 'quiet', 'remove-control-file',
            'save-session', 'save-session-interval', 'stop', 'incomplete-suffix', 'auto-file-renaming-style', 'state-dir',
            'state-save-interval', 'stop-with-process', 'log-max-size', 'log-max-files', 'on-download-start',
            'on-download-pause', 'on-download-stop', 'on-download-complete', 'on-download-error', 'on-bt-download-complete'
        ]
    }).constant('aria2QuickSettingsAvailableOptions', {
        globalSpeedLimitOptions: [
            'max-overall-download-limit', 'max-overall-upload-limit'
        ]
    }).constant('aria2TaskAvailableOptions', {
        // Aria2 Task Option Definition EXAMPLE:
        // {
        //     key: 'option key',
        //     category: 'global|http|bittorrent',
        //     [canShow: 'new|active|waiting|paused',] // possible to show in specific status, supporting multiple choice. if not set, always show
        //     [canUpdate: 'new|active|waiting|paused',] // possible to write in specific status, supporting multiple choice. if not set, always writable
        //     [showHistory: true|false,] // show history under the input box, only supporting "string" type. if not set, this is set to false
        // }
        taskOptions: [
            {
                key: 'dir',
                category: 'global',
                canUpdate: 'new',
                showHistory: true
            },
            {
                key: 'out',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'allow-overwrite',
                category: 'global',
                canShow: 'new'
            },
            {
                key: 'max-download-limit',
                category: 'global'
            },
            {
                key: 'max-upload-limit',
                category: 'bittorrent'
            },
            {
                key: 'split',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'min-split-size',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'max-connection-per-server',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'lowest-speed-limit',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-user',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-passwd',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'all-proxy',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'all-proxy-user',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'all-proxy-passwd',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'checksum',
                category: 'http'
            },
            {
                key: 'continue',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'referer',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'header',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'bt-max-peers',
                category: 'bittorrent'
            },
            {
                key: 'bt-tracker',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'seed-ratio',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'seed-time',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'pause-metadata',
                category: 'bittorrent',
                canUpdate: 'new'
            },
            {
                key: 'check-integrity',
                category: 'global'
            },
            {
                key: 'file-allocation',
                category: 'global',
                canShow: 'new'
            },
            {
                key: 'force-save',
                category: 'global'
            },
            {
                key: 'timeout',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'connect-timeout',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'max-tries',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'retry-wait',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'user-agent',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-no-cache',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-accept-gzip',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'enable-http-keep-alive',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'load-cookies',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'save-cookies',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'check-certificate',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'ca-certificate',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'certificate',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'private-key',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'min-tls-version',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-proxy',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-proxy-user',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'http-proxy-passwd',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'https-proxy',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'https-proxy-user',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'https-proxy-passwd',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'no-proxy',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'dns-over-https',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'interface',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'disable-ipv6',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'netrc-path',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'no-netrc',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'sftp-user',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'sftp-passwd',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'ssh-host-key-sha256',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'remote-time',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'max-file-not-found',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'filename-hint',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'filename-hint-source',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'auto-file-renaming',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'incomplete-suffix',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'auto-file-renaming-style',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'remove-control-file',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'save-not-found',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'index-out',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'follow-torrent',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'enable-dht',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'enable-peer-exchange',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-enable-lpd',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-encryption',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-transport',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-exclude-tracker',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-max-uploads-per-torrent',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-seed-unverified',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-super-seeding',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'bt-first-last-piece-first',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'force-sequential',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'hash-check-only',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'detach-share-only',
                category: 'bittorrent',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'follow-metalink',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'ed2k-server',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'ed2k-server-list',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'ed2k-node-list',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'ed2k-preview-priority',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-format',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-video',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-audio',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-subtitles',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-pause-after-probe',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-record-time',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'media-start-time',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'media-end-time',
                category: 'http',
                canUpdate: 'new'
            },
            {
                key: 'dry-run',
                category: 'http',
                canUpdate: 'new|waiting|paused'
            },
            {
                key: 'pause',
                category: 'global',
                canUpdate: 'new'
            }
        ]
    });
}());
