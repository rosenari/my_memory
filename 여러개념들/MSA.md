### MSA에서의 인증과 인가

- MSA에서 인증과 인가를 진행할때는 API GATEWAY를 구성하여 진행하게 된다.
- API GATEWAY는 모든 API에 대한 단일 액세스 포인트이며, 아래 도식도 처럼 구성하는 게 일반적이다.

![233A833B54F727471C](https://user-images.githubusercontent.com/49670068/137440671-f09a4ee4-baf4-4972-a520-39f31d0a07fa.png)

> 가상 사설망 내부에서 API GATEWAY와 통신하는 경우 인증 인가 로직은 거치지 않게하여, 개발자가 디버깅하기 용이하도록한다.

- 인증된 사용자의 권한관리를 위해 서버기반의 토큰방식을 많이 채용하며, 플로우는 아래와 같다.

![21624D3C54F323CB23](https://user-images.githubusercontent.com/49670068/137440804-5f9fa12b-37e9-4bd2-90d2-412bb5991ce1.png)
