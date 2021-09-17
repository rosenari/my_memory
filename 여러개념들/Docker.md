### Docker install for Ubuntu
```bash
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

sudo apt update

apt-cache policy docker-ce

sudo apt install docker-ce

sudo usermod -aG docker $USER
```
- 마지막 명령 실행후 세션 재접속시 docker 명령 사용가능

### Docker out of Docker

- 호스트의 docker socket을 에이전트 컨테이너에 볼륨세팅을 통해 공유하여, 에이전트 컨테이너가 호스트의 데몬에 도커 명령을 전달할 수 있게 설정하는 기술이다.
- 참고로 에이전트 컨테이너에 도커를 사전설치해야한다.

```bash
$ docker run -v /var/run/docker.sock:/var/run/docker.sock ...
```
