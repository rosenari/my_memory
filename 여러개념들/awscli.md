### awscli 설치하기

```bash
sudo apt-get update

sudo apt-get install awscli

aws --version
```

### awscli 설정하기

```bash
aws configure

AWS Access Key ID []: AKIAXXXXXXXXXX
AWS Secret Access Key []: XXXWfz2aveXXXXXXXXXXXX
Default region name [ap-northeast-2]:
Default output format [None]: json
```

### aws ecr login 정보 얻기

```bash
aws ecr get-login --no-include-email --region ap-northeast-2
```
