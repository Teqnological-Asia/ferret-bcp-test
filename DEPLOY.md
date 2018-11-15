## Prepare
You need to prepare 2 source:
- **Web BCP**: https://git.teqnological.asia/smartplus/smartplus-web-bcp
- **Open Account**: https://git.teqnological.asia/smartplus/web-open-account

## Build
- Go to **Web BCP** folder:
  - Update package: `yarn`
  - Build: `yarn build:staging` for staging and `yarn build:production` for production

- Go to **Open Account** folder:
  - Update package: `yarn`
  - Build: `yarn build:staging` for staging and `yarn build:production` for production


- In **Open Account** folder:
  - Copy all built files to `build/op` of `Web BCP`: `cp -a build/. ${WEB_BCP_DIR}/build/op/`
  - Example: `cp -a build/. ../smartplus-web-bcp/build/op/`

## Sync all file to S3
- Go to `Web BCP` folder
- Sync all files in `build` folder to S3