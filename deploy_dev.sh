# BUILD=true
# GREEN='\033[0;32m'
# NC='\033[0m'
# PROFILE=$1

# for i in "$@"
# do
# case $i in
#     -b=*|--build=*)
#     BUILD="${i#*=}"
#     ;;
#     --default)
#     DEFAULT=YES
#     ;;
#     *)
#             # unknown option
#     ;;
# esac
# done
# export REACT_APP_RELEASE_VERSION=$(git describe --abbrev=0)
# # Build bcp source
# if $BUILD
# then
# echo -e "${GREEN}Building..${NC}"
# yarn build:development
# fi

# yarn --cwd ../web-open-account
# yarn --cwd ../web-open-account build:development
# cp -r ../web-open-account/build/ ./build/op/ --profile=$PROFILE
# aws s3 sync build/ s3://teqvn-gokuu-bcp/
# echo -e "${GREEN}Deploy done${NC}"