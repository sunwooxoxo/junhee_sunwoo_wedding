/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "준희",
    father: "원명석",
    mother: "정영숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "선우",
    father: "이관희",
    mother: "김여원",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "12:30",
    venue: "더 세인트 41층 파노라마홀",
    address: "서울특별시 구로구 경인로 662",
    mapLinks: {
      naver: "https://naver.me/xExWm05A"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "우리의 날",
    content: "따스한 가을 햇살이 비추는 10월\n저희 두 사람은 사랑의 마음으로\n새로운 시작을 맞이합니다.\n\n오래도록 함께할 약속의 날,\n소중한 여러분을 초대합니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 약속",
    content: "• 좋은 날엔 더 크게 웃기.\n• 힘든 날엔 더 꼭 잡아주기.\n• 평생 서로의 편이 되어주기."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
accounts: {
    groom: [
      { role: "신랑", name: "원준희", bank: "우리은행", number: "1002-440-352687" },
      { role: "아버지", name: "원명석", bank: "기업은행", number: "666-031367-01-011" },
      { role: "어머니", name: "정영숙", bank: "농협은행", number: "356-09127-83-153" }
    ],
    bride: [
      { role: "신부", name: "이선우", bank: "신한은행", number: "110-231-244381" },
     
      { role: "어머니", name: "김여원", bank: "신한은행", number: "110-282-868351" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "준희 ♥ 선우 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};