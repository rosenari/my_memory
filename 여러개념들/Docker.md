### Docker out of Docker

- 호스트의 docker socket을 에이전트 컨테이너에 볼륨세팅을 통해 공유하여, 에이전트 컨테이너가 호스트의 데몬에 도커 명령을 전달할 수 있게 설정하는 기술이다.
- 참고로 에이전트 컨테이너에 도커를 사전설치해야한다.

```bash
$ docker run -v /var/run/docker.sock:/var/run/docker.sock ...
```
