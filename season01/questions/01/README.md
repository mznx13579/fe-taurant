# 01
> `01.js` 파일에 작성해주세요.

- 아래 표는 공공메일의 메일 서비스에서 구성되어 있는 고정 메일함의 이름과 id 정보 입니다.

| 메일함 이름 | id |
| --- | --- |
| 전체 메일함 | `0` |
| 받은 메일함 | `1` |
| 보낸 메일함 | `2` |
| 임시보관함 | `3` |
| 스팸 메일함 | `4` |
| 휴지통 | `5` |
| 보낼 메일함 | `6` |

- 위 메일함 중 받은 메일함, 보낸 메일함, 스팸 메일함, 휴지통만 수신 규칙으로 등록시 메일함을 지정할 수 있습니다.
- `checkAvailableRegisterReceiveRule` 함수의 인자로 메일함 id 값을 받는다고할 때 수신 규칙으로 등록할 수 있는 메일함의 id인 경우 `'available'`을, 아닌 경우 `'unavailable'` 텍스트를 출력하도록 설계해주세요.
- 단, `checkAvailableRegisterReceiveRule` 함수의 인자는 무조건 `number` 타입만 들어온다고 가정합니다.