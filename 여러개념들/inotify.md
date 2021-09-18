### inotify란 ?

- 파일이나 디렉토리를 개별적으로 모니터링 할 수 있도록 리눅스에서 제공하는 서비스 중 하나이다.

### watch 파일 개수 제한 변경

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

sudo sysctl -p
```

> 참고로 도커에서 직접 max_user_watches를 변경하려 하면 변경되지 않는다. 호스트 os의 설정값을 docker 컨테이너가 그대로 상속받는 특성을 활용해 호스트 os의 설정값을 바꿔주면 docker container에도 적용이 된다.
