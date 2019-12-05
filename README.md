![Carbon Logo](https://i.imgur.com/JX6nZks.png)

[![Greenkeeper badge](https://badges.greenkeeper.io/leadhomesa/carbon.svg)](https://greenkeeper.io/)

A super simple React boilerplate.

## Features
- Webpack 4
- Styled Components
- HMR
- ESLint + Prettier
- PWA ready

## Getting Started
```
cp sample.env .env
npm install
```

### Config
Sample config can be found in `sample.env`.
At the moment the following values are supported:
- **PORT**: The port the webpack dev server runs on.
- **NODE_ENV**: Changing this value to `production` enables a service worker.
- **API_URL**: Api Url which is proxied by the Webpack dev server (and nginx if you use the Docker image).
- **PUBLIC_URL**: This value is only necessary to be included when you need to host the build output on a subdirectory. For example `https://yourwebsite.com/carbon/`

## Local development with HMR
```
npm start
```

## Production build
- Set NODE_ENV=production to enable the service worker.
```
npm run build
OR
npm run clean-and-build
```

### IDE Config
##### Webstorm
1. Right click on src -> Mark directory as -> Resource Root.
2. After first build: Right click on build -> Mark directory as -> Excluded.

## Authors

* **Francois** - *Initial work* - [fjlaubscher](https://github.com/fjlaubscher)
* **Kyle** - *Initial work* - [MrOpperman](https://github.com/MrOpperman)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

License
-------

Carbon is © 2019 Leadhome Pty Ltd.
It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.

Maintained by
----------------

[![logo](https://i.imgur.com/QH4yUje.png)](https://leadhome.co.za?utm_source=github)

Carbon was created and is maintained by Leadhome Pty Ltd.<br />
The names and logos for Leadhome are trademarks of Leadhome Pty Ltd.
