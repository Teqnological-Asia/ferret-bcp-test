BUILD=true
GREEN='\033[0;32m'
NC='\033[0m'
PROFILE=$1

export REACT_APP_RELEASE_VERSION=$(git describe --abbrev=0)

yarn build:development
aws s3 sync build/ s3://web-bcp-dev/ --profile=$PROFILE
echo -e "${GREEN}Deploy done${NC}"