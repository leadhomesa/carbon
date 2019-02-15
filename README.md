![Carbon Logo](https://i.imgur.com/JX6nZks.png)

A super simple React boilerplate.

## Features
- Parcel
- Styled Components
- HMR
- ESLint
- Pretter
- PWA ready
- Pre-rendered HTML for production builds (No SSR -- Controversial, we know)

## Getting Started
```
cp sample.env .env
npm install
```

## Local development with HMR
```
npm start
```

## Production build
- Set NODE_ENV=production to enable the service worker.
- This also uses Chromium to pre-render the entire React app and allows the client to be Hydrated (as if it were rendered using SSR).
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
