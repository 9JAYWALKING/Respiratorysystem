/* Image-based pathology bank. Source credits travel with each image. */
window.RESPIRATORY_PATHOLOGY_DATA = {
  "version": 1,
  "updated": "2026-10-27",
  "concepts": {
    "hypoplasia": {
      "label": "Pulmonary hypoplasia",
      "explanation": "폐가 충분히 발달하지 못해 작다. 폐포와 기도의 수가 감소하며, 흉강 내 공간 부족이나 양수 감소 등이 원인이 된다."
    },
    "bronchocyst": {
      "label": "Bronchogenic cyst",
      "explanation": "낭종벽의 호흡상피, 연골, 기관지샘이 기관지 기원을 알려 준다. 단순히 공간이 크다는 것보다 벽을 구성하는 조직을 확인한다."
    },
    "sequestration": {
      "label": "Pulmonary sequestration",
      "explanation": "정상 기관지와 연결되지 않는 폐조직이 대동맥 계통의 혈액을 받는다. 조직의 만성 염증만으로 확진하기보다 기도 연결과 공급 동맥을 함께 확인한다."
    },
    "cpam0": {
      "label": "CPAM type 0",
      "explanation": "기관·기관지 수준의 분화 이상이다. 작은 낭성 기도에 연골과 샘이 동반될 수 있으며, 광범위한 발달 이상으로 나타난다."
    },
    "cpam1": {
      "label": "CPAM type 1",
      "explanation": "크고 뚜렷한 낭종이 특징이다. 낭종은 섬모 원주상피로 덮이고 점액세포가 섞일 수 있다. 유형 중 가장 흔하다."
    },
    "cpam2": {
      "label": "CPAM type 2",
      "explanation": "비교적 균일한 작은 낭종들이 모여 스펀지처럼 보인다. 낭종벽은 섬모 입방·원주상피로 덮이며 다른 선천기형의 동반을 살핀다."
    },
    "cpam3": {
      "label": "CPAM type 3",
      "explanation": "작은 세기관지 같은 구조와 미성숙 폐포 구조가 빽빽하게 모인다. 낭종이 작아 육안으로는 고형 종괴처럼 보일 수 있다."
    },
    "cpam4": {
      "label": "CPAM type 4",
      "explanation": "말초 폐포 수준의 분화 이상으로, 얇고 편평한 상피가 큰 낭종을 덮는다. 큰 말초 낭종의 벽을 읽는 것이 핵심이다."
    },
    "edema": {
      "label": "Pulmonary edema",
      "explanation": "폐포 안에 옅은 분홍색의 단백성 액체가 찬다. 폐포벽의 모세혈관 울혈과 함께 볼 수 있다. 오래된 울혈에서는 hemosiderin 대식세포가 나타난다."
    },
    "dad": {
      "label": "Diffuse alveolar damage (DAD)",
      "explanation": "폐포 장벽의 급성 손상으로 부종과 hyaline membrane이 생긴다. 수복기에는 type II pneumocyte 증식과 조직화가 이어진다. DAD는 조직학적 패턴이며 원인은 다양하다."
    },
    "hyaline": {
      "label": "Hyaline membrane",
      "explanation": "폐포 안쪽을 따라 붙은 매끈한 호산성 띠다. 누출된 단백질·fibrin과 손상된 상피 잔해로 이루어지며 DAD의 삼출기를 대표한다."
    },
    "type2": {
      "label": "Type II pneumocyte hyperplasia",
      "explanation": "폐포벽을 덮는 입방형 상피세포가 증식한 수복 소견이다. DAD 회복기 등에서 나타나며 폐포 내 대식세포와 위치를 구분해 읽는다."
    },
    "thrombus": {
      "label": "Pulmonary thromboembolism",
      "explanation": "폐동맥 안을 막고 있는 혈전이다. 큰 색전은 급성 우심부전을, 말초 색전은 흉막을 밑변으로 하는 출혈성 경색을 일으킬 수 있다."
    },
    "infarct": {
      "label": "Hemorrhagic pulmonary infarction",
      "explanation": "흉막을 밑변으로 하는 쐐기 모양의 검붉은 병변이다. 혈관 폐쇄로 괴사한 조직에 혈액이 스며들어 출혈성으로 보인다."
    },
    "marrow": {
      "label": "Bone marrow / fat embolism",
      "explanation": "폐혈관 안에서 지방 공포와 골수 조혈세포가 보인다. 장골 골절 등으로 골수 성분이 혈류로 유입될 때 나타날 수 있다."
    },
    "plexiform": {
      "label": "Plexiform lesion",
      "explanation": "작은 혈관 통로가 복잡하게 얽혀 증식한 병변이다. 심한 폐동맥고혈압에서 나타나는 특징적 혈관 재형성이다."
    },
    "onion": {
      "label": "Concentric intimal fibrosis",
      "explanation": "혈관 내막의 섬유조직이 동심원으로 겹쳐 내강을 좁힌다. 단면에서 양파껍질 같은 모양으로 보인다."
    },
    "medial": {
      "label": "Medial hypertrophy",
      "explanation": "폐동맥의 중막 평활근이 두꺼워지고 내강이 좁아진다. 폐고혈압에 따른 혈관 재형성의 한 소견이다."
    },
    "hemorrhage": {
      "label": "Diffuse alveolar hemorrhage",
      "explanation": "폐포 공간을 적혈구가 채운다. 시간이 지나면 적혈구를 먹은 대식세포에 hemosiderin이 쌓인다. 조직 소견과 임상·자가항체 검사를 함께 해석한다."
    },
    "siderophage": {
      "label": "Hemosiderin-laden macrophage",
      "explanation": "대식세포 안에 거친 황갈색 hemosiderin 과립이 보인다. Prussian blue에서 철이 청색으로 염색된다. 이전 폐포출혈이나 만성 울혈의 단서다."
    },
    "linear": {
      "label": "Linear IgG deposition",
      "explanation": "기저막을 따라 연속된 선 모양의 면역형광이 보인다. 항기저막항체 질환의 선형 침착이며 과립형 면역복합체 침착과 형태가 다르다."
    },
    "emphysema": {
      "label": "Emphysema",
      "explanation": "말단세기관지 원위부 공기 공간이 영구적으로 확장되고 폐포벽이 파괴된다. 커진 빈 공간과 끊기거나 남은 얇은 폐포중격을 함께 본다."
    },
    "centri": {
      "label": "Centrilobular emphysema",
      "explanation": "호흡세기관지를 중심으로 샘꽈리의 근위부가 먼저 파괴되고 원위 폐포는 상대적으로 보존된다. 병든 공간과 비교적 정상인 공간이 섞이며 흡연·상엽 우세와 연결된다."
    },
    "pan": {
      "label": "Panacinar emphysema",
      "explanation": "호흡세기관지부터 말단 폐포까지 샘꽈리 전체가 비교적 균일하게 확장된다. α₁-antitrypsin 결핍과 하엽 우세를 연결한다."
    },
    "paraseptal": {
      "label": "Distal acinar (paraseptal) emphysema",
      "explanation": "샘꽈리 원위부가 흉막·중격 바로 아래에서 확장된다. 흉막하 bleb 또는 bulla가 파열되면 자연기흉이 생길 수 있다."
    },
    "irregular": {
      "label": "Irregular emphysema",
      "explanation": "흉터와 연관되어 샘꽈리가 불규칙하게 침범된다. 다른 유형처럼 특정 부위의 일관된 분포를 보이지 않는다."
    },
    "bronchitis": {
      "label": "Chronic bronchitis",
      "explanation": "점액샘 비대와 술잔세포 증가로 점액 분비가 늘어난다. 점막밑샘 층이 두꺼워지며, 임상적으로 만성적인 가래 기침의 기간을 확인한다."
    },
    "asthma": {
      "label": "Asthma",
      "explanation": "점액 마개, 호산구성 염증, 기저막하 비후, 평활근 비대가 함께 보인다. 객담에서는 Curschmann spiral과 Charcot–Leyden crystal을 찾을 수 있다."
    },
    "bronchiectasis": {
      "label": "Bronchiectasis",
      "explanation": "기관지벽이 파괴되어 기도가 영구적으로 확장된다. 흉막 가까이까지 이어지는 확장 기도와 고름, 조직에서는 벽의 궤양·염증·섬유화를 본다."
    },
    "curschmann": {
      "label": "Curschmann spiral",
      "explanation": "작은 기도 안에서 굳은 점액이 나선형으로 배출된 구조다. 길게 꼬인 점액 덩어리를 찾는다."
    },
    "charcot": {
      "label": "Charcot–Leyden crystal",
      "explanation": "호산구에서 유래한 단백질 결정으로, 길고 양끝이 뾰족한 형태를 보인다. 호산구성 염증과 연결한다."
    },
    "creola": {
      "label": "Creola body",
      "explanation": "떨어져 나온 기관지 상피세포들이 무리를 이룬 것이다. 점액 나선이나 결정과 달리 개별 세포와 핵을 볼 수 있다."
    },
    "mucus": {
      "label": "Mucus plug",
      "explanation": "기도 내강을 채운 점액 마개다. 기도 모양을 본뜬 길쭉한 cast로 보이거나 조직에서 내강을 메우는 물질로 보인다."
    },
    "eosinophil": {
      "label": "Eosinophil",
      "explanation": "대개 두 엽의 핵과 선명한 붉은 세포질 과립을 가진다. 호산구성 폐렴·알레르기·기생충 등에서 증가하며 세포 하나만으로 원인을 단정하지 않는다."
    },
    "gland": {
      "label": "Submucosal gland hyperplasia",
      "explanation": "기관지 연골 안쪽 점막밑샘 층이 넓어진다. Reid index는 전체 기관지벽 두께에 대한 점액샘 층 두께의 비율이다."
    },
    "goblet": {
      "label": "Goblet cell hyperplasia",
      "explanation": "기도 상피에서 점액을 담은 술잔세포가 증가한다. 만성 자극과 점액 과분비를 연결하는 소견이다."
    },
    "basement": {
      "label": "Subepithelial basement membrane thickening",
      "explanation": "기관지 상피 아래의 호산성 띠가 두꺼워진다. 천식의 만성적인 기도 재형성 소견이며 평활근층과 위치가 다르다."
    },
    "squamousmet": {
      "label": "Squamous metaplasia",
      "explanation": "정상 호흡상피가 중층편평상피로 바뀐 것이다. 만성 자극에 대한 적응이며, 이형성이나 침윤과는 별도로 판단한다."
    },
    "uip": {
      "label": "Usual interstitial pneumonia (UIP)",
      "explanation": "정상 폐, 치밀한 오래된 섬유화, 새로운 fibroblastic focus가 불균일하게 섞인다. 흉막하·격막주위 분포와 honeycomb change를 함께 본다. UIP는 패턴이며 IPF 외 질환에서도 나타난다."
    },
    "nsip": {
      "label": "Nonspecific interstitial pneumonia (NSIP)",
      "explanation": "폐포중격의 염증이나 섬유화가 비교적 균일한 시기와 분포를 보인다. cellular와 fibrotic 양상이 있으며 전체적으로 고른 변화를 읽는다."
    },
    "op": {
      "label": "Organizing pneumonia (OP)",
      "explanation": "폐포·폐포관·세기관지 내강에 느슨한 섬유모세포성 조직이 자라 마개를 만든다. 폐포 구조는 비교적 보존된다. 원인 불명인 COP와 이차성 OP를 구분한다."
    },
    "dip": {
      "label": "Desquamative interstitial pneumonia (DIP)",
      "explanation": "폐포 공간을 대식세포가 넓고 비교적 균일하게 채운다. 세포질의 갈색 색소와 경한 중격 비후를 볼 수 있고 흡연과 연관된다."
    },
    "rbild": {
      "label": "Respiratory bronchiolitis–ILD",
      "explanation": "갈색 색소를 가진 대식세포가 호흡세기관지와 바로 주변 폐포에 집중된다. 넓게 퍼진 DIP와 달리 세기관지 중심 분포를 읽는다."
    },
    "hp": {
      "label": "Hypersensitivity pneumonitis",
      "explanation": "세기관지 중심의 간질 염증에 작고 느슨한 비괴사성 육아종이 섞인다. 만성화하면 섬유화가 생기므로 노출력과 함께 판단한다."
    },
    "lip": {
      "label": "Lymphocytic interstitial pneumonia (LIP)",
      "explanation": "림프구·형질세포가 폐간질을 넓게 침윤하며 림프소포와 배중심이 동반될 수 있다. 림프구성 간질 침윤이 중심인 패턴이다."
    },
    "pap": {
      "label": "Pulmonary alveolar proteinosis",
      "explanation": "폐포 안을 과립성·호산성 surfactant 물질이 채우며 PAS 양성이다. 폐포중격 자체는 비교적 보존되고 염증은 심하지 않을 수 있다."
    },
    "ff": {
      "label": "Fibroblastic focus",
      "explanation": "기존 폐조직과 섬유화 경계에 볼록한 작은 섬유모세포·근섬유모세포 집합이 보인다. 점액성 바탕과 표면 상피로 덮인 새로운 섬유화 병변이다."
    },
    "masson": {
      "label": "Masson body",
      "explanation": "폐포나 폐포관의 내강을 채우는 느슨한 섬유모세포성 육아조직 마개다. 내강 안에 위치하고 원래 폐포 골격이 남는 것이 OP의 핵심이다."
    },
    "honeycomb": {
      "label": "Honeycomb fibrosis",
      "explanation": "섬유화로 재형성된 낭성 공간이 모여 벌집처럼 보인다. 낭성 공간은 세기관지형 상피로 덮이고 점액을 포함할 수 있다."
    },
    "collagen": {
      "label": "Dense collagen fibrosis",
      "explanation": "세포가 적고 치밀한 호산성 collagen이 폐구조를 대체한다. 활동성 섬유모세포가 많은 새 병변과 대비되는 오래된 흉터다."
    },
    "sarcoid": {
      "label": "Sarcoidosis",
      "explanation": "잘 형성된 비괴사성 상피양 육아종이 특징이다. 기관지혈관 주위·흉막 등 림프관 경로를 따른다. 감염 배제와 임상 소견을 함께 확인한다."
    },
    "necgran": {
      "label": "Necrotizing granuloma",
      "explanation": "중심의 무정형 괴사 주위를 상피양 조직구와 다핵거대세포가 둘러싼다. 결핵·진균 감염 등을 고려하고 특수염색으로 원인을 확인한다."
    },
    "nonnecgran": {
      "label": "Non-necrotizing epithelioid granuloma",
      "explanation": "상피양 조직구가 경계가 뚜렷한 집합을 이루지만 중심 괴사가 두드러지지 않는다. 대표적으로 sarcoidosis에서 보며 감염 등 다른 원인도 배제한다."
    },
    "loosegran": {
      "label": "Poorly formed granuloma",
      "explanation": "조직구와 소수의 거대세포가 작고 느슨한 집합을 이룬다. 세기관지 중심 간질 염증과 동반되면 과민폐렴의 중요한 단서다."
    },
    "langhans": {
      "label": "Langhans-type giant cell",
      "explanation": "여러 핵이 세포 가장자리를 따라 말발굽 또는 고리 모양으로 배열된다. 육아종에서 볼 수 있으나 이 세포 하나가 결핵에 특이적인 것은 아니다."
    },
    "asteroid": {
      "label": "Asteroid body",
      "explanation": "다핵거대세포 안의 별 모양 호산성 봉입체다. Sarcoidosis에서 볼 수 있으나 그 질환에만 특이적이지는 않다."
    },
    "schaumann": {
      "label": "Schaumann body",
      "explanation": "거대세포 안의 층판상 석회화 봉입체다. 별 모양 asteroid body와 형태를 구분한다."
    },
    "asbestosbody": {
      "label": "Asbestos (ferruginous) body",
      "explanation": "투명한 중심 섬유를 철 함유 단백질이 감싸 황갈색 막대처럼 보인다. 구슬처럼 분절되거나 양끝이 두꺼운 모양이 특징이다."
    },
    "anthracosis": {
      "label": "Anthracotic pigment",
      "explanation": "대식세포와 간질·림프관 주변에 검은 탄분이 쌓인다. 색소만으로 복잡성 진폐증을 뜻하지는 않으며 섬유화의 양과 분포를 함께 본다."
    },
    "silicotic": {
      "label": "Whorled collagen in a silicotic nodule",
      "explanation": "중심의 치밀한 collagen이 소용돌이 또는 동심원으로 배열된 결절이다. 주변의 먼지를 먹은 대식세포와 함께 읽는다."
    },
    "cwp": {
      "label": "Coal workers’ pneumoconiosis",
      "explanation": "탄분을 포함한 macule·nodule과 섬유화가 보인다. 진행하면 검은 거대한 반흔을 만드는 progressive massive fibrosis가 생긴다."
    },
    "silicosis": {
      "label": "Silicosis",
      "explanation": "상엽 우세의 단단한 섬유성 결절과 동심원성 collagen이 특징이다. 편광에서 입자를 확인할 수 있고 결핵 위험이 증가한다."
    },
    "asbestosis": {
      "label": "Asbestosis",
      "explanation": "하엽·흉막하 중심 섬유화와 asbestos body를 함께 읽는다. 섬유화는 UIP처럼 보일 수 있으며 노출력과 흉막판이 보조 단서다."
    },
    "plaque": {
      "label": "Pleural plaque",
      "explanation": "벽측흉막에 생기는 경계가 뚜렷한 단단한 collagen 판이다. 석회화될 수 있으며 석면 노출의 표지다. 그 자체가 중피종 전구병변은 아니다."
    },
    "plch": {
      "label": "Pulmonary Langerhans cell histiocytosis",
      "explanation": "핵에 홈이 있는 Langerhans 세포가 호산구와 함께 침윤한다. CD1a·langerin·S100 양성이며 흡연, 세기관지 중심 결절·낭성 변화와 연결한다."
    },
    "neutrophil": {
      "label": "Neutrophilic alveolar exudate",
      "explanation": "폐포 공간을 다핵 호중구와 fibrin이 채운다. 세균성 폐렴에서 흔한 화농성 삼출 양상이다."
    },
    "bronchopneumonia": {
      "label": "Bronchopneumonia",
      "explanation": "기관지·세기관지 주위의 반점 모양 화농성 병변이 여러 군데 흩어진다. 서로 합쳐질 수 있지만 초기 분포는 국소적·산재성이다."
    },
    "lobar": {
      "label": "Lobar pneumonia",
      "explanation": "한 엽의 넓은 부위가 연속적으로 경화된다. 울혈·적색간화·회색간화·해소로 이어지는 폐포 내 삼출의 변화를 읽는다."
    },
    "abscess": {
      "label": "Lung abscess",
      "explanation": "폐실질이 화농성 염증으로 괴사해 고름을 담은 공동이 형성된다. 중심의 액화괴사와 주위 염증·조직 파괴가 핵심이다."
    },
    "tb": {
      "label": "Pulmonary tuberculosis",
      "explanation": "건락괴사성 육아종과 항산균이 주요 단서다. 재활성 결핵은 상엽 공동, 파종은 수많은 작은 결절로 나타날 수 있다."
    },
    "pjp": {
      "label": "Pneumocystis jirovecii pneumonia",
      "explanation": "폐포 안의 거품 모양 삼출물과 GMS에서 보이는 컵·초승달 모양 낭포를 연결한다. 면역저하 환자에서 중요하다."
    },
    "aspergilloma": {
      "label": "Aspergilloma",
      "explanation": "이미 존재하던 폐 공동 안에 Aspergillus 균사가 덩어리로 모여 fungal ball을 이룬다. 균사 모양과 공동 안의 위치를 함께 확인한다."
    },
    "crypto": {
      "label": "Cryptococcosis",
      "explanation": "크기가 다양한 둥근 효모 주위의 투명한 피막과 좁은 목의 출아가 단서다. 다핵거대세포 안팎에서 보이며 피막은 mucicarmine·Alcian blue로 확인한다."
    },
    "mucorDisease": {
      "label": "Mucormycosis",
      "explanation": "넓고 리본 같은 균사가 드문 격벽과 불규칙한 직각 분지를 보인다. 혈관 침범에 의한 괴사가 중요하다."
    },
    "abpa": {
      "label": "Allergic bronchopulmonary aspergillosis",
      "explanation": "기관지 안의 층상 알레르기성 점액과 호산구, 때로 소수의 균사가 보인다. 천식·과민반응·중심성 기관지확장과 연결한다."
    },
    "candidiasis": {
      "label": "Pulmonary candidiasis",
      "explanation": "출아 효모와 pseudohyphae를 확인한다. 실제 조직 침범을 입증하는 것이 중요하며 기도 검체 배양만으로 폐렴을 단정하지 않는다."
    },
    "asperhypha": {
      "label": "Septate hyphae with acute-angle branching",
      "explanation": "굵기가 비교적 균일한 가는 균사에 격벽이 있고 약 45°의 예각으로 분지한다. Aspergillus의 대표적인 조직 형태다."
    },
    "mucorhypha": {
      "label": "Broad pauciseptate hyphae",
      "explanation": "넓고 불규칙한 리본 모양 균사에 격벽이 적으며 대체로 직각에 가까운 분지를 보인다. Mucorales를 시사한다."
    },
    "cryptoyeast": {
      "label": "Encapsulated narrow-based budding yeast",
      "explanation": "둥근 효모를 넓은 투명 피막이 둘러싸고 출아의 연결부가 좁다. Cryptococcus의 특징적 형태다."
    },
    "pseudohypha": {
      "label": "Budding yeast with pseudohyphae",
      "explanation": "길게 이어진 세포 사이가 잘록해지는 가성균사와 출아 효모를 함께 본다. Candida에서 대표적이다."
    },
    "pjpcyst": {
      "label": "Cup-shaped Pneumocystis cyst",
      "explanation": "GMS에서 작은 컵·초승달 모양의 낭포벽이 염색된다. 폐포 내 거품 모양 삼출물과 함께 P. jirovecii를 확인하는 단서다."
    },
    "afb": {
      "label": "Acid-fast bacillus",
      "explanation": "Ziehl–Neelsen 염색에서 가늘고 붉은 막대균이 보인다. 결핵 등 항산균 감염을 뒷받침하며 염색만으로 균종을 모두 구분하지는 않는다."
    },
    "paragonimus": {
      "label": "Operculated Paragonimus egg",
      "explanation": "갈색의 두꺼운 껍질과 한쪽 끝의 operculum을 가진 충란이다. 폐흡충 감염에서 객담·조직의 충란을 확인한다."
    },
    "caseation": {
      "label": "Caseous necrosis",
      "explanation": "정상 조직 구조가 사라진 과립성·무정형의 호산성 괴사다. 결핵성 육아종의 중심에서 대표적으로 보인다."
    },
    "coagulation": {
      "label": "Coagulative necrosis",
      "explanation": "세포는 죽었지만 조직의 윤곽이 한동안 보존된다. 허혈성 경색의 기본 괴사 양상이다."
    },
    "liquefactive": {
      "label": "Liquefactive necrosis",
      "explanation": "호중구 등의 효소로 조직이 소화되어 액화된다. 폐농양에서는 고름과 공동으로 나타난다."
    },
    "fibrinoid": {
      "label": "Fibrinoid necrosis",
      "explanation": "혈관벽이 강한 호산성의 fibrin 유사 물질로 변하는 소견이다. 면역성 혈관 손상에서 볼 수 있다."
    },
    "fatnec": {
      "label": "Fat necrosis",
      "explanation": "지방세포의 손상으로 세포 윤곽과 비누화·염증이 나타난다. 혈관 안의 지방 색전 자체와는 다른 조직 반응이다."
    },
    "scc": {
      "label": "Squamous cell carcinoma",
      "explanation": "종양세포의 keratinization과 intercellular bridge를 찾는다. Keratin pearl과 강한 호산성 세포질이 단서이며 p40 등으로 편평분화를 확인한다."
    },
    "adeno": {
      "label": "Adenocarcinoma",
      "explanation": "종양세포가 샘 구조를 만들거나 세포질 내 점액을 가진다. Lepidic·acinar·papillary·micropapillary·solid 등 다양한 성장 양상이 있다."
    },
    "sclc": {
      "label": "Small cell carcinoma",
      "explanation": "세포질이 매우 적은 작은 종양세포가 빽빽하게 모이고 서로 핵의 모양을 누르는 nuclear molding이 나타난다. 미세한 chromatin, 많은 유사분열·괴사를 함께 본다. Chromogranin·synaptophysin·CD56 등 신경내분비 표지자가 분화를 뒷받침하며, 전자현미경에서는 dense-core neurosecretory granule을 볼 수 있다."
    },
    "lcnec": {
      "label": "Large cell neuroendocrine carcinoma",
      "explanation": "큰 종양세포에 신경내분비성 organoid nesting·rosette·palisading이 나타난다. 높은 유사분열과 괴사, 신경내분비 표지자를 함께 평가한다."
    },
    "carcinoid": {
      "label": "Carcinoid tumor",
      "explanation": "비교적 균일한 신경내분비 세포가 둥지·띠·rosette를 이룬다. Salt-and-pepper chromatin이 특징이며 typical/atypical 분류에는 유사분열과 괴사를 평가한다."
    },
    "hamartoma": {
      "label": "Chondroid hamartoma",
      "explanation": "성숙 연골 사이에 지방과 틈새 모양의 기관지 상피가 섞인 양성 병변이다. 연골 하나보다 서로 다른 성숙 조직의 조합을 읽는다."
    },
    "sclerosing": {
      "label": "Sclerosing pneumocytoma",
      "explanation": "표면 입방세포와 둥근 간질세포 두 세포군이 보이며 papillary·solid·sclerotic·hemorrhagic 양상이 섞인다. 두 세포군의 TTF-1 발현과 다른 상피표지자 차이를 확인한다."
    },
    "keratin": {
      "label": "Keratin pearl",
      "explanation": "종양세포 둥지 중심의 각질이 동심원으로 겹친 호산성 소용돌이 구조다. 잘 분화한 편평세포암의 대표적 소견이다."
    },
    "bridge": {
      "label": "Intercellular bridge",
      "explanation": "인접한 편평분화 세포 사이가 가는 가시·다리처럼 이어진다. 세포 경계와 세포 사이의 연결을 고배율에서 읽는다."
    },
    "molding": {
      "label": "Nuclear molding",
      "explanation": "세포질이 적은 종양세포가 밀착해 한 핵이 이웃 핵의 윤곽을 따라 눌린다. 소세포암을 떠올리게 하는 중요한 소견이다."
    },
    "mucin": {
      "label": "Intracytoplasmic mucin",
      "explanation": "종양세포질 안에 점액성 공포가 보인다. 샘 형성과 함께 샘암종의 분화를 뒷받침하며 필요하면 점액 염색을 사용한다."
    },
    "rosette": {
      "label": "Rosette formation",
      "explanation": "종양세포가 중심의 작은 공간이나 섬유성 중심을 둘러싸며 방사상으로 배열된다. 신경내분비 종양에서 볼 수 있는 배열이다."
    },
    "staghorn": {
      "label": "Staghorn vessels",
      "explanation": "가늘고 길게 가지치는 혈관 주위에 방추세포가 배열된다. SFT의 patternless spindle-cell 배경에서 특징적으로 보인다."
    },
    "densecore": {
      "label": "Dense-core neurosecretory granule",
      "explanation": "전자현미경에서 막으로 둘러싸인 과립 안에 전자밀도가 높은 검은 중심이 보인다. 신경내분비 분화를 나타내는 구조다."
    },
    "lamellar": {
      "label": "Lamellar body",
      "explanation": "Type II pneumocyte의 surfactant 저장 소기관이다. 여러 겹의 막이 층판 또는 양파껍질 모양으로 배열된다."
    },
    "mitochondria": {
      "label": "Mitochondrion",
      "explanation": "이중막과 내부 cristae가 특징인 소기관이다. 내부의 규칙적인 막 주름을 읽는다."
    },
    "microvilli": {
      "label": "Long slender microvilli",
      "explanation": "세포 표면에 길고 가는 미세융모가 많이 뻗는다. 전통적으로 중피세포 분화의 전자현미경적 단서다."
    },
    "cilia": {
      "label": "Cilia with axonemes",
      "explanation": "세포 표면에서 뻗는 섬모로, 단면의 미세소관 배열과 기저체를 확인한다. 미세융모보다 내부 구조가 복잡하다."
    },
    "lepidic": {
      "label": "Lepidic growth",
      "explanation": "종양세포가 기존 폐포중격을 따라 한 층으로 자란다. 공기 공간과 폐포 골격이 남는다. 사진 한 장의 lepidic 양상만으로 침윤 여부 전체를 확정하지는 않는다."
    },
    "acinar": {
      "label": "Acinar growth",
      "explanation": "종양세포가 중심 내강을 갖는 샘 구조를 만든다. 간질 안에 분리된 샘들이 침윤하는 모습을 본다."
    },
    "papillary": {
      "label": "Papillary growth",
      "explanation": "섬유혈관 중심을 가진 유두를 종양세포가 덮는다. 중심 기질의 존재가 핵심이다."
    },
    "micropapillary": {
      "label": "Micropapillary growth",
      "explanation": "섬유혈관 중심 없이 작은 종양세포 덩이가 유두처럼 모인다. 공기 공간 안에 떠 있는 작은 군집을 찾는다."
    },
    "solid": {
      "label": "Solid growth",
      "explanation": "샘이나 유두 구조가 거의 없이 종양세포가 판상·둥지 모양으로 채운다. 샘암종의 solid형 판단에는 다른 분화 근거도 함께 확인한다."
    },
    "cribriform": {
      "label": "Cribriform growth",
      "explanation": "종양세포 덩이 안에 작은 내강이 여러 개 뚫려 체 같은 구조를 만든다. 복잡한 샘 구조에 속한다."
    },
    "sft": {
      "label": "Solitary fibrous tumor",
      "explanation": "방추세포가 collagen과 함께 일정한 배열 없이 자라고 staghorn 혈관이 섞인다. STAT6 핵 양성 및 NAB2–STAT6 fusion을 연결한다."
    },
    "meso": {
      "label": "Malignant mesothelioma",
      "explanation": "흉막을 따라 미만성으로 자라 폐를 감싸는 종양이다. 상피형·육종형·이상성 양상이 있으며 면역염색 패널과 분자 소견을 함께 평가한다."
    },
    "pleuritis": {
      "label": "Fibrinous pleuritis",
      "explanation": "흉막 표면을 거친 fibrin 삼출물이 덮는다. 조직화되면 흉막의 유착과 섬유화로 이어진다."
    },
    "empyema": {
      "label": "Empyema",
      "explanation": "흉막강 안에 고름이 축적된 상태다. 폐실질 내부의 농양과 달리 고름이 있는 공간이 흉막강이다."
    },
    "thymomaA": {
      "label": "Type A thymoma",
      "explanation": "방추형 또는 타원형 흉선 상피세포가 비교적 균일하게 배열되고 림프구가 적다."
    },
    "thymomaB1": {
      "label": "Type B1 thymoma",
      "explanation": "정상 흉선과 비슷하게 림프구가 매우 풍부하고 수질 유사 부위가 섞인다. 종양성 상피세포는 상대적으로 눈에 덜 띈다."
    },
    "thymomaB2": {
      "label": "Type B2 thymoma",
      "explanation": "풍부한 림프구 사이로 핵소체가 보이는 다각형 상피세포가 비교적 뚜렷하게 나타난다."
    },
    "thymomaB3": {
      "label": "Type B3 thymoma",
      "explanation": "상피세포가 판상으로 우세하고 림프구는 적다. 경도·중등도의 이형성을 보일 수 있으며 B2보다 상피 성분이 두드러진다."
    },
    "thymicca": {
      "label": "Thymic carcinoma",
      "explanation": "뚜렷한 악성 상피세포와 침윤이 보이며 정상 흉선의 조직적 특징을 잃는다. 편평세포암 양상이 흔하다."
    },
    "seminoma": {
      "label": "Seminoma",
      "explanation": "밝은 세포질과 뚜렷한 핵소체를 가진 큰 종양세포가 림프구성 격막 사이로 모인다. 앞종격동의 생식세포종양을 고려한다."
    },
    "teratoma": {
      "label": "Mature teratoma",
      "explanation": "서로 다른 배엽에서 유래한 성숙 조직이 한 종괴 안에 섞인다. 피부·샘·연골 등 다양한 조직과 낭성 내용물을 볼 수 있다."
    },
    "neuroblastoma": {
      "label": "Neuroblastoma",
      "explanation": "작고 미분화된 신경모세포와 neuropil을 보며 Homer Wright rosette가 나타날 수 있다. 소아의 후종격동 신경성 종양이다."
    },
    "ganglioneuro": {
      "label": "Ganglioneuroblastoma",
      "explanation": "미성숙 신경모세포와 분화한 신경절세포가 함께 보인다. 미성숙·성숙 성분의 공존을 읽는다."
    },
    "ganglioneuroma": {
      "label": "Ganglioneuroma",
      "explanation": "성숙한 신경절세포가 Schwann 세포성 기질 속에 분포한다. 분화가 잘 된 신경성 종양이다."
    }
  },
  "categories": [
    {
      "lecture": 14,
      "label": "14강 · 발달·순환·급성 손상"
    },
    {
      "lecture": 15,
      "label": "15강 · 폐쇄성 질환"
    },
    {
      "lecture": 16,
      "label": "16강 · 간질·분진 질환"
    },
    {
      "lecture": 17,
      "label": "17강 · 감염"
    },
    {
      "lecture": 37,
      "label": "37강 · 폐종양"
    },
    {
      "lecture": 38,
      "label": "38강 · 흉막·종격동"
    },
    {
      "lecture": 39,
      "label": "39강 · 폐 병리 실습"
    }
  ],
  "questions": [
    {
      "key": "14-87799b852e22-hypoplasia",
      "lecture": 14,
      "order": 1,
      "target": "hypoplasia",
      "kind": "disease",
      "image": "assets/pathology-drill/img-87799b852e22.jpg",
      "width": 1444,
      "height": 904,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "폐가 충분히 발달하지 못해 작다. 폐포와 기도의 수가 감소하며, 흉강 내 공간 부족이나 양수 감소 등이 원인이 된다.",
      "pool": [
        "hypoplasia",
        "bronchocyst",
        "sequestration",
        "bronchiectasis",
        "hamartoma",
        "emphysema"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p005-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P1",
      "wiki": {
        "lecture": 14,
        "heading": "폐형성저하와 기관–식도 연결 이상"
      }
    },
    {
      "key": "14-424b8a637b57-bronchocyst",
      "lecture": 14,
      "order": 7,
      "target": "bronchocyst",
      "kind": "disease",
      "image": "assets/pathology-drill/img-424b8a637b57.jpg",
      "width": 1016,
      "height": 794,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "낭종벽의 호흡상피, 연골, 기관지샘이 기관지 기원을 알려 준다. 단순히 공간이 크다는 것보다 벽을 구성하는 조직을 확인한다.",
      "pool": [
        "hypoplasia",
        "bronchocyst",
        "sequestration",
        "bronchiectasis",
        "hamartoma",
        "emphysema"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p012-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P2",
      "wiki": {
        "lecture": 14,
        "heading": "기관지원성 낭종은 낭종벽의 호흡상피를 확인한다"
      }
    },
    {
      "key": "14-760696ca2983-cpam0",
      "lecture": 14,
      "order": 9,
      "target": "cpam0",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-760696ca2983.jpg",
      "width": 1027,
      "height": 694,
      "arrow": null,
      "question": "사진에 해당하는 CPAM 유형은?",
      "note": "기관·기관지 수준의 분화 이상이다. 작은 낭성 기도에 연골과 샘이 동반될 수 있으며, 광범위한 발달 이상으로 나타난다.",
      "pool": [
        "cpam0",
        "cpam1",
        "cpam2",
        "cpam3",
        "cpam4"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p014-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P3",
      "wiki": {
        "lecture": 14,
        "heading": "CPAM은 낭종의 크기와 분화 수준으로 나눈다"
      }
    },
    {
      "key": "14-be257e7cc10f-cpam1",
      "lecture": 14,
      "order": 10,
      "target": "cpam1",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-be257e7cc10f.jpg",
      "width": 1018,
      "height": 778,
      "arrow": null,
      "question": "사진에 해당하는 CPAM 유형은?",
      "note": "크고 뚜렷한 낭종이 특징이다. 낭종은 섬모 원주상피로 덮이고 점액세포가 섞일 수 있다. 유형 중 가장 흔하다.",
      "pool": [
        "cpam0",
        "cpam1",
        "cpam2",
        "cpam3",
        "cpam4"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p015-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P4",
      "wiki": {
        "lecture": 14,
        "heading": "CPAM은 낭종의 크기와 분화 수준으로 나눈다"
      }
    },
    {
      "key": "14-23b64fe3e8df-cpam2",
      "lecture": 14,
      "order": 11,
      "target": "cpam2",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-23b64fe3e8df.jpg",
      "width": 1010,
      "height": 769,
      "arrow": null,
      "question": "사진에 해당하는 CPAM 유형은?",
      "note": "비교적 균일한 작은 낭종들이 모여 스펀지처럼 보인다. 낭종벽은 섬모 입방·원주상피로 덮이며 다른 선천기형의 동반을 살핀다.",
      "pool": [
        "cpam0",
        "cpam1",
        "cpam2",
        "cpam3",
        "cpam4"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p016-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P5",
      "wiki": {
        "lecture": 14,
        "heading": "CPAM은 낭종의 크기와 분화 수준으로 나눈다"
      }
    },
    {
      "key": "14-6376463d207a-cpam3",
      "lecture": 14,
      "order": 12,
      "target": "cpam3",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-6376463d207a.jpg",
      "width": 1020,
      "height": 703,
      "arrow": null,
      "question": "사진에 해당하는 CPAM 유형은?",
      "note": "작은 세기관지 같은 구조와 미성숙 폐포 구조가 빽빽하게 모인다. 낭종이 작아 육안으로는 고형 종괴처럼 보일 수 있다.",
      "pool": [
        "cpam0",
        "cpam1",
        "cpam2",
        "cpam3",
        "cpam4"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p017-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P6",
      "wiki": {
        "lecture": 14,
        "heading": "CPAM은 낭종의 크기와 분화 수준으로 나눈다"
      }
    },
    {
      "key": "14-9d3a8e406bcb-cpam4",
      "lecture": 14,
      "order": 13,
      "target": "cpam4",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-9d3a8e406bcb.jpg",
      "width": 1015,
      "height": 679,
      "arrow": null,
      "question": "사진에 해당하는 CPAM 유형은?",
      "note": "말초 폐포 수준의 분화 이상으로, 얇고 편평한 상피가 큰 낭종을 덮는다. 큰 말초 낭종의 벽을 읽는 것이 핵심이다.",
      "pool": [
        "cpam0",
        "cpam1",
        "cpam2",
        "cpam3",
        "cpam4"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p018-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P7",
      "wiki": {
        "lecture": 14,
        "heading": "CPAM은 낭종의 크기와 분화 수준으로 나눈다"
      }
    },
    {
      "key": "14-000cd019d9c1-edema",
      "lecture": 14,
      "order": 17,
      "target": "edema",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-000cd019d9c1.jpg",
      "width": 510,
      "height": 500,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 안에 옅은 분홍색의 단백성 액체가 찬다. 폐포벽의 모세혈관 울혈과 함께 볼 수 있다. 오래된 울혈에서는 hemosiderin 대식세포가 나타난다.",
      "pool": [
        "edema",
        "hemorrhage",
        "neutrophil",
        "pap",
        "dip",
        "dad",
        "op"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p023-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P8",
      "wiki": {
        "lecture": 14,
        "heading": "폐부종의 두 기전은 압력 변화와 장벽 손상이다"
      }
    },
    {
      "key": "14-04ed999e396a-siderophage",
      "lecture": 14,
      "order": 17,
      "target": "siderophage",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-04ed999e396a.jpg",
      "width": 517,
      "height": 480,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "대식세포 안에 거친 황갈색 hemosiderin 과립이 보인다. Prussian blue에서 철이 청색으로 염색된다. 이전 폐포출혈이나 만성 울혈의 단서다.",
      "pool": [
        "type2",
        "eosinophil",
        "siderophage",
        "langhans",
        "goblet",
        "neutrophil"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p023-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P9",
      "wiki": {
        "lecture": 14,
        "heading": "미만성 폐포출혈에서는 hemosiderin을 가진 대식세포를 찾는다"
      }
    },
    {
      "key": "14-28aeeec0398a-dad",
      "lecture": 14,
      "order": 19,
      "target": "dad",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-28aeeec0398a.jpg",
      "width": 803,
      "height": 614,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 장벽의 급성 손상으로 부종과 hyaline membrane이 생긴다. 수복기에는 type II pneumocyte 증식과 조직화가 이어진다. DAD는 조직학적 패턴이며 원인은 다양하다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p028-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P10",
      "wiki": {
        "lecture": 14,
        "heading": "ALI·ARDS의 조직학적 손상은 DAD로 읽는다"
      }
    },
    {
      "key": "14-82fce967777d-type2",
      "lecture": 14,
      "order": 20,
      "target": "type2",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-82fce967777d.jpg",
      "width": 871,
      "height": 661,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포벽을 덮는 입방형 상피세포가 증식한 수복 소견이다. DAD 회복기 등에서 나타나며 폐포 내 대식세포와 위치를 구분해 읽는다.",
      "pool": [
        "type2",
        "eosinophil",
        "siderophage",
        "langhans",
        "goblet",
        "neutrophil"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p029-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P11",
      "wiki": {
        "lecture": 14,
        "heading": "ALI·ARDS의 조직학적 손상은 DAD로 읽는다"
      }
    },
    {
      "key": "14-3ea23d8190a0-thrombus",
      "lecture": 14,
      "order": 21,
      "target": "thrombus",
      "kind": "disease",
      "image": "assets/pathology-drill/img-3ea23d8190a0.jpg",
      "width": 558,
      "height": 494,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "폐동맥 안을 막고 있는 혈전이다. 큰 색전은 급성 우심부전을, 말초 색전은 흉막을 밑변으로 하는 출혈성 경색을 일으킬 수 있다.",
      "pool": [
        "thrombus",
        "infarct",
        "marrow",
        "plexiform",
        "onion",
        "medial"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p034-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P12",
      "wiki": {
        "lecture": 14,
        "heading": "폐색전은 큰 혈관의 급성 우심부전과 말초의 경색을 나눈다"
      }
    },
    {
      "key": "14-00b0ec76657e-infarct",
      "lecture": 14,
      "order": 21,
      "target": "infarct",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-00b0ec76657e.jpg",
      "width": 651,
      "height": 495,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "흉막을 밑변으로 하는 쐐기 모양의 검붉은 병변이다. 혈관 폐쇄로 괴사한 조직에 혈액이 스며들어 출혈성으로 보인다.",
      "pool": [
        "thrombus",
        "infarct",
        "marrow",
        "plexiform",
        "onion",
        "medial"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p034-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P13",
      "wiki": {
        "lecture": 14,
        "heading": "폐색전은 큰 혈관의 급성 우심부전과 말초의 경색을 나눈다"
      }
    },
    {
      "key": "14-66b690c2e259-marrow",
      "lecture": 14,
      "order": 22,
      "target": "marrow",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-66b690c2e259.jpg",
      "width": 457,
      "height": 664,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐혈관 안에서 지방 공포와 골수 조혈세포가 보인다. 장골 골절 등으로 골수 성분이 혈류로 유입될 때 나타날 수 있다.",
      "pool": [
        "thrombus",
        "infarct",
        "marrow",
        "plexiform",
        "onion",
        "medial"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p035-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P14",
      "wiki": {
        "lecture": 14,
        "heading": "폐색전은 큰 혈관의 급성 우심부전과 말초의 경색을 나눈다"
      }
    },
    {
      "key": "14-2f6199f6650a-onion",
      "lecture": 14,
      "order": 23,
      "target": "onion",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-2f6199f6650a.jpg",
      "width": 701,
      "height": 617,
      "arrow": [
        87,
        79,
        42,
        38
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "혈관 내막의 섬유조직이 동심원으로 겹쳐 내강을 좁힌다. 단면에서 양파껍질 같은 모양으로 보인다.",
      "pool": [
        "thrombus",
        "infarct",
        "marrow",
        "plexiform",
        "onion",
        "medial"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p038-figures.jpg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [],
      "id": "P15",
      "wiki": {
        "lecture": 14,
        "heading": "폐고혈압은 원인 분류와 혈관 재형성을 연결한다"
      }
    },
    {
      "key": "14-2376224236ee-medial",
      "lecture": 14,
      "order": 24,
      "target": "medial",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2376224236ee.jpg",
      "width": 587,
      "height": 460,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐동맥의 중막 평활근이 두꺼워지고 내강이 좁아진다. 폐고혈압에 따른 혈관 재형성의 한 소견이다.",
      "pool": [
        "thrombus",
        "infarct",
        "marrow",
        "plexiform",
        "onion",
        "medial"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p039-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P16",
      "wiki": {
        "lecture": 14,
        "heading": "폐고혈압은 원인 분류와 혈관 재형성을 연결한다"
      }
    },
    {
      "key": "14-3b8865765051-plexiform",
      "lecture": 14,
      "order": 25,
      "target": "plexiform",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-3b8865765051.jpg",
      "width": 629,
      "height": 610,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "작은 혈관 통로가 복잡하게 얽혀 증식한 병변이다. 심한 폐동맥고혈압에서 나타나는 특징적 혈관 재형성이다.",
      "pool": [
        "thrombus",
        "infarct",
        "marrow",
        "plexiform",
        "onion",
        "medial"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p040-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P17",
      "wiki": {
        "lecture": 14,
        "heading": "폐고혈압은 원인 분류와 혈관 재형성을 연결한다"
      }
    },
    {
      "key": "14-07a326323574-siderophage",
      "lecture": 14,
      "order": 26,
      "target": "siderophage",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-07a326323574.jpg",
      "width": 674,
      "height": 625,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "철 염색에서 대식세포 안의 청색 과립을 확인한다. 폐포 내 출혈이나 만성 울혈 후 생긴 hemosiderin이다.",
      "pool": [
        "type2",
        "eosinophil",
        "siderophage",
        "langhans",
        "goblet",
        "neutrophil"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p044-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P18",
      "wiki": {
        "lecture": 14,
        "heading": "미만성 폐포출혈에서는 hemosiderin을 가진 대식세포를 찾는다"
      }
    },
    {
      "key": "14-ff85e63e56dc-hemorrhage",
      "lecture": 14,
      "order": 27,
      "target": "hemorrhage",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-ff85e63e56dc.jpg",
      "width": 648,
      "height": 897,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 공간을 적혈구가 채운다. 시간이 지나면 적혈구를 먹은 대식세포에 hemosiderin이 쌓인다. 조직 소견과 임상·자가항체 검사를 함께 해석한다.",
      "pool": [
        "edema",
        "hemorrhage",
        "neutrophil",
        "pap",
        "dip",
        "dad",
        "op"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p043-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P19",
      "wiki": {
        "lecture": 14,
        "heading": "미만성 폐포출혈에서는 hemosiderin을 가진 대식세포를 찾는다"
      }
    },
    {
      "key": "14-2e667d3eeb7e-linear",
      "lecture": 14,
      "order": 27,
      "target": "linear",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2e667d3eeb7e.jpg",
      "width": 648,
      "height": 898,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "기저막을 따라 연속된 선 모양의 면역형광이 보인다. 항기저막항체 질환의 선형 침착이며 과립형 면역복합체 침착과 형태가 다르다.",
      "pool": [
        "linear",
        "hyaline",
        "collagen",
        "fibrinoid",
        "asbestosbody"
      ],
      "source": {
        "label": "14강 Wiki",
        "origin": "assets/lecture-14/p043-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P20",
      "wiki": {
        "lecture": 14,
        "heading": "Goodpasture에서는 폐와 신장의 기저막을 함께 생각한다"
      }
    },
    {
      "key": "14-6fafbaef8322-hyaline",
      "lecture": 14,
      "order": 191.53,
      "target": "hyaline",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-6fafbaef8322.jpg",
      "width": 180,
      "height": 143,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 안쪽을 따라 붙은 매끈한 호산성 띠다. 누출된 단백질·fibrin과 손상된 상피 잔해로 이루어지며 DAD의 삼출기를 대표한다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2408600/",
        "title": "Nitrofurantoin-induced pulmonary fibrosis: a case report",
        "license": "This is an Open Access article distributed under the terms of the Creative Commons Attribution License ( http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Hematoxylin and eosin, periodic acid Schiff, Grocott and Elastica von Gieson stained sections of sampled lung tissue . (a, b) Diffuse alveolar damage with denuded edematous alveolar septa with thick hyaline membranes and intra-alveolar hemorrhage. (c) Aspergilloma composed of radiating regularly branched fungal hyphae (periodic acid Schiff stain, insert: high magnification Grocott stain). (d, e, f) Lung parenchyma with severely distorted architecture consisting of established fibrosis with sharply angulated and cystically dilated bronchioli with inspissated secretions. In the interstitium a patchy lympho-histiocytic infiltrate is present (f). Bronchiolar smooth muscle hypertrophy (e) and squamous metaplasia (f) is seen.",
        "label": "외부 증례 · PMC2408600",
        "origin": "PMC2408600 F3",
        "authors": "",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "2"
      ],
      "id": "P21",
      "wiki": {
        "lecture": 14,
        "heading": "ALI·ARDS의 조직학적 손상은 DAD로 읽는다"
      }
    },
    {
      "key": "15-1e7fd102f48b-emphysema",
      "lecture": 15,
      "order": 29,
      "target": "emphysema",
      "kind": "disease",
      "image": "assets/pathology-drill/img-1e7fd102f48b.jpg",
      "width": 907,
      "height": 671,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "말단세기관지 원위부 공기 공간이 영구적으로 확장되고 폐포벽이 파괴된다. 커진 빈 공간과 끊기거나 남은 얇은 폐포중격을 함께 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p050-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "1"
      ],
      "id": "P22",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종에서는 커진 공간보다 파괴된 벽이 중요하다"
      }
    },
    {
      "key": "15-8bb139a1885f-emphysema",
      "lecture": 15,
      "order": 30,
      "target": "emphysema",
      "kind": "disease",
      "image": "assets/pathology-drill/img-8bb139a1885f.jpg",
      "width": 814,
      "height": 594,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "말단세기관지 원위부 공기 공간이 영구적으로 확장되고 폐포벽이 파괴된다. 커진 빈 공간과 끊기거나 남은 얇은 폐포중격을 함께 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p051-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "1"
      ],
      "id": "P23",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종에서는 커진 공간보다 파괴된 벽이 중요하다"
      }
    },
    {
      "key": "15-ccced3a8073f-centri",
      "lecture": 15,
      "order": 32,
      "target": "centri",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-ccced3a8073f.jpg",
      "width": 822,
      "height": 803,
      "arrow": null,
      "question": "사진에 해당하는 폐기종의 분포 유형은?",
      "note": "호흡세기관지를 중심으로 샘꽈리의 근위부가 먼저 파괴되고 원위 폐포는 상대적으로 보존된다. 병든 공간과 비교적 정상인 공간이 섞이며 흡연·상엽 우세와 연결된다.",
      "pool": [
        "centri",
        "pan",
        "paraseptal",
        "irregular",
        "bronchiectasis"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p053-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "1"
      ],
      "id": "P24",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종의 유형은 샘꽈리에서 손상된 위치로 구분한다"
      }
    },
    {
      "key": "15-2bf1fdd1225a-pan",
      "lecture": 15,
      "order": 33,
      "target": "pan",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2bf1fdd1225a.jpg",
      "width": 555,
      "height": 897,
      "arrow": null,
      "question": "사진에 해당하는 폐기종의 분포 유형은?",
      "note": "호흡세기관지부터 말단 폐포까지 샘꽈리 전체가 비교적 균일하게 확장된다. α₁-antitrypsin 결핍과 하엽 우세를 연결한다.",
      "pool": [
        "centri",
        "pan",
        "paraseptal",
        "irregular",
        "bronchiectasis"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p055-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P25",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종의 유형은 샘꽈리에서 손상된 위치로 구분한다"
      }
    },
    {
      "key": "15-d60c9b658381-paraseptal",
      "lecture": 15,
      "order": 34,
      "target": "paraseptal",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-d60c9b658381.jpg",
      "width": 590,
      "height": 635,
      "arrow": null,
      "question": "사진에 해당하는 폐기종의 분포 유형은?",
      "note": "샘꽈리 원위부가 흉막·중격 바로 아래에서 확장된다. 흉막하 bleb 또는 bulla가 파열되면 자연기흉이 생길 수 있다.",
      "pool": [
        "centri",
        "pan",
        "paraseptal",
        "irregular",
        "bronchiectasis"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p062-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P26",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종의 유형은 샘꽈리에서 손상된 위치로 구분한다"
      }
    },
    {
      "key": "15-6defbd8b1928-bronchitis",
      "lecture": 15,
      "order": 36,
      "target": "bronchitis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-6defbd8b1928.jpg",
      "width": 789,
      "height": 621,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "점액샘 비대와 술잔세포 증가로 점액 분비가 늘어난다. 점막밑샘 층이 두꺼워지며, 임상적으로 만성적인 가래 기침의 기간을 확인한다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p065-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P27",
      "wiki": {
        "lecture": 15,
        "heading": "만성기관지염의 정의와 점액 과분비"
      }
    },
    {
      "key": "15-e09805006c43-gland",
      "lecture": 15,
      "order": 37,
      "target": "gland",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-e09805006c43.jpg",
      "width": 682,
      "height": 424,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "기관지 연골 안쪽 점막밑샘 층이 넓어진다. Reid index는 전체 기관지벽 두께에 대한 점액샘 층 두께의 비율이다.",
      "pool": [
        "gland",
        "goblet",
        "basement",
        "squamousmet",
        "masson",
        "hyaline"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p066-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P28",
      "wiki": {
        "lecture": 15,
        "heading": "Reid index는 커진 점막밑샘을 수치로 표현한다"
      }
    },
    {
      "key": "15-00a397c176c0-mucus",
      "lecture": 15,
      "order": 40,
      "target": "mucus",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-00a397c176c0.jpg",
      "width": 799,
      "height": 618,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "기도 내강을 채운 점액 마개다. 기도 모양을 본뜬 길쭉한 cast로 보이거나 조직에서 내강을 메우는 물질로 보인다.",
      "pool": [
        "curschmann",
        "charcot",
        "creola",
        "mucus",
        "asbestosbody",
        "cryptoyeast"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p071-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P29",
      "wiki": {
        "lecture": 15,
        "heading": "천식의 기도벽과 객담에서 확인할 구조"
      }
    },
    {
      "key": "15-40d5320d5327-curschmann",
      "lecture": 15,
      "order": 41,
      "target": "curschmann",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-40d5320d5327.jpg",
      "width": 776,
      "height": 542,
      "arrow": [
        83,
        77,
        52,
        54
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "작은 기도 안에서 굳은 점액이 나선형으로 배출된 구조다. 길게 꼬인 점액 덩어리를 찾는다.",
      "pool": [
        "curschmann",
        "charcot",
        "creola",
        "mucus",
        "asbestosbody",
        "cryptoyeast"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p072-figures.jpg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [],
      "id": "P30",
      "wiki": {
        "lecture": 15,
        "heading": "천식의 기도벽과 객담에서 확인할 구조"
      }
    },
    {
      "key": "15-099b38a6db37-creola",
      "lecture": 15,
      "order": 41,
      "target": "creola",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-099b38a6db37.jpg",
      "width": 696,
      "height": 542,
      "arrow": [
        86,
        72,
        55,
        49
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "떨어져 나온 기관지 상피세포들이 무리를 이룬 것이다. 점액 나선이나 결정과 달리 개별 세포와 핵을 볼 수 있다.",
      "pool": [
        "curschmann",
        "charcot",
        "creola",
        "mucus",
        "asbestosbody",
        "cryptoyeast"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p072-figures.jpg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [],
      "id": "P31",
      "wiki": {
        "lecture": 15,
        "heading": "천식의 기도벽과 객담에서 확인할 구조"
      }
    },
    {
      "key": "15-11672a683d1f-charcot",
      "lecture": 15,
      "order": 41,
      "target": "charcot",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-11672a683d1f.jpg",
      "width": 776,
      "height": 566,
      "arrow": [
        57,
        70,
        78,
        37
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "호산구에서 유래한 단백질 결정으로, 길고 양끝이 뾰족한 형태를 보인다. 호산구성 염증과 연결한다.",
      "pool": [
        "curschmann",
        "charcot",
        "creola",
        "mucus",
        "asbestosbody",
        "cryptoyeast"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p072-figures.jpg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [],
      "id": "P32",
      "wiki": {
        "lecture": 15,
        "heading": "천식의 기도벽과 객담에서 확인할 구조"
      }
    },
    {
      "key": "15-2e482a6e8e0d-asthma",
      "lecture": 15,
      "order": 41,
      "target": "asthma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-2e482a6e8e0d.jpg",
      "width": 776,
      "height": 592,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "점액 마개, 호산구성 염증, 기저막하 비후, 평활근 비대가 함께 보인다. 객담에서는 Curschmann spiral과 Charcot–Leyden crystal을 찾을 수 있다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p072-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P33",
      "wiki": {
        "lecture": 15,
        "heading": "천식의 기도벽과 객담에서 확인할 구조"
      }
    },
    {
      "key": "15-71b6e01eb403-bronchiectasis",
      "lecture": 15,
      "order": 43,
      "target": "bronchiectasis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-71b6e01eb403.jpg",
      "width": 540,
      "height": 911,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "기관지벽이 파괴되어 기도가 영구적으로 확장된다. 흉막 가까이까지 이어지는 확장 기도와 고름, 조직에서는 벽의 궤양·염증·섬유화를 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p075-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "3"
      ],
      "id": "P34",
      "wiki": {
        "lecture": 15,
        "heading": "폐쇄와 감염이 반복되면 기관지는 영구적으로 늘어난다"
      }
    },
    {
      "key": "15-1d26a65dfc90-bronchiectasis",
      "lecture": 15,
      "order": 44,
      "target": "bronchiectasis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-1d26a65dfc90.jpg",
      "width": 981,
      "height": 687,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "기관지벽이 파괴되어 기도가 영구적으로 확장된다. 흉막 가까이까지 이어지는 확장 기도와 고름, 조직에서는 벽의 궤양·염증·섬유화를 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "15강 Wiki",
        "origin": "assets/lecture-15/p076-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "3"
      ],
      "id": "P35",
      "wiki": {
        "lecture": 15,
        "heading": "폐쇄와 감염이 반복되면 기관지는 영구적으로 늘어난다"
      }
    },
    {
      "key": "15-7e77a67e8492-emphysema",
      "lecture": 15,
      "order": 191.55,
      "target": "emphysema",
      "kind": "disease",
      "image": "assets/pathology-drill/img-7e77a67e8492.jpg",
      "width": 527,
      "height": 397,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "말단세기관지 원위부 공기 공간이 영구적으로 확장되고 폐포벽이 파괴된다. 커진 빈 공간과 끊기거나 남은 얇은 폐포중격을 함께 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3157944/",
        "title": "Pathogenic triad in COPD: oxidative stress, protease–antiprotease imbalance, and inflammation",
        "license": "This is an Open Access article which permits unrestricted noncommercial use, provided the original work is properly cited.",
        "caption": "Histologic features of centrilobular emphysema. A section of lung tissue shows fragmented and “free-floating” alveolar septa (arrow) characteristic of emphysema. Note:  Hemotoxylin-eosin, original magnification ×200.",
        "label": "외부 증례 · PMC3157944",
        "origin": "PMC3157944 f2-copd-6-413",
        "authors": "Bernard M Fischer, Elizabeth Pavlisko, Judith A Voynow",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "1"
      ],
      "id": "P36",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종에서는 커진 공간보다 파괴된 벽이 중요하다"
      }
    },
    {
      "key": "15-cf4befd625a0-bronchitis",
      "lecture": 15,
      "order": 191.56,
      "target": "bronchitis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-cf4befd625a0.jpg",
      "width": 518,
      "height": 383,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "점액샘 비대와 술잔세포 증가로 점액 분비가 늘어난다. 점막밑샘 층이 두꺼워지며, 임상적으로 만성적인 가래 기침의 기간을 확인한다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3157944/",
        "title": "Pathogenic triad in COPD: oxidative stress, protease–antiprotease imbalance, and inflammation",
        "license": "This is an Open Access article which permits unrestricted noncommercial use, provided the original work is properly cited.",
        "caption": "Histologic features of chronic bronchitis. ( A ) A section of bronchiole wall with luminal accumulation of mucous, goblet cell hyperplasia, basement membrane thickening (arrow), and scattered mononuclear inflammatory cells. ( B ) A bronchial wall with squamous metaplasia of the luminal epithelium (arrow head) and hyperplasia of the subepithelial seromucinous glands (arrow). Note:  Hemotoxylin-eosin, original magnification ×200.",
        "label": "외부 증례 · PMC3157944",
        "origin": "PMC3157944 f1-copd-6-413",
        "authors": "Bernard M Fischer, Elizabeth Pavlisko, Judith A Voynow",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P37",
      "wiki": {
        "lecture": 15,
        "heading": "만성기관지염의 정의와 점액 과분비"
      }
    },
    {
      "key": "16-d9e36fe398f8-uip",
      "lecture": 16,
      "order": 46,
      "target": "uip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-d9e36fe398f8.jpg",
      "width": 850,
      "height": 631,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "흉막의 울퉁불퉁한 표면과 흉막하 섬유화는 UIP에서 볼 수 있는 육안 소견이다. 조직의 불균일한 섬유화와 함께 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p082-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P38",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-09346487497b-uip",
      "lecture": 16,
      "order": 47,
      "target": "uip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-09346487497b.jpg",
      "width": 823,
      "height": 621,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "정상 폐, 치밀한 오래된 섬유화, 새로운 fibroblastic focus가 불균일하게 섞인다. 흉막하·격막주위 분포와 honeycomb change를 함께 본다. UIP는 패턴이며 IPF 외 질환에서도 나타난다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p083-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P39",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-df0e22f025ae-uip",
      "lecture": 16,
      "order": 48,
      "target": "uip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-df0e22f025ae.jpg",
      "width": 1030,
      "height": 675,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "정상 폐, 치밀한 오래된 섬유화, 새로운 fibroblastic focus가 불균일하게 섞인다. 흉막하·격막주위 분포와 honeycomb change를 함께 본다. UIP는 패턴이며 IPF 외 질환에서도 나타난다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p084-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P40",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-eda1ddfebf41-ff",
      "lecture": 16,
      "order": 49,
      "target": "ff",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-eda1ddfebf41.jpg",
      "width": 645,
      "height": 897,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "기존 폐조직과 섬유화 경계에 볼록한 작은 섬유모세포·근섬유모세포 집합이 보인다. 점액성 바탕과 표면 상피로 덮인 새로운 섬유화 병변이다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p085-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P41",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-49521bfc9685-ff",
      "lecture": 16,
      "order": 50,
      "target": "ff",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-49521bfc9685.jpg",
      "width": 590,
      "height": 785,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "기존 폐조직과 섬유화 경계에 볼록한 작은 섬유모세포·근섬유모세포 집합이 보인다. 점액성 바탕과 표면 상피로 덮인 새로운 섬유화 병변이다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p086-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P42",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-bf049ead14ff-honeycomb",
      "lecture": 16,
      "order": 51,
      "target": "honeycomb",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-bf049ead14ff.jpg",
      "width": 1003,
      "height": 759,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "섬유화로 재형성된 낭성 공간이 모여 벌집처럼 보인다. 낭성 공간은 세기관지형 상피로 덮이고 점액을 포함할 수 있다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p087-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P43",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-f1278b88e633-nsip",
      "lecture": 16,
      "order": 52,
      "target": "nsip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-f1278b88e633.jpg",
      "width": 504,
      "height": 667,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포중격의 염증이나 섬유화가 비교적 균일한 시기와 분포를 보인다. cellular와 fibrotic 양상이 있으며 전체적으로 고른 변화를 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p089-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P44",
      "wiki": {
        "lecture": 16,
        "heading": "NSIP는 병변의 시간이 비교적 균일하다"
      }
    },
    {
      "key": "16-bc277bcdf6ec-nsip",
      "lecture": 16,
      "order": 53,
      "target": "nsip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-bc277bcdf6ec.jpg",
      "width": 731,
      "height": 432,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포중격의 염증이나 섬유화가 비교적 균일한 시기와 분포를 보인다. cellular와 fibrotic 양상이 있으며 전체적으로 고른 변화를 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p090-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P45",
      "wiki": {
        "lecture": 16,
        "heading": "NSIP는 병변의 시간이 비교적 균일하다"
      }
    },
    {
      "key": "16-c335f338736b-op",
      "lecture": 16,
      "order": 55,
      "target": "op",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-c335f338736b.jpg",
      "width": 1050,
      "height": 672,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포·폐포관·세기관지 내강에 느슨한 섬유모세포성 조직이 자라 마개를 만든다. 폐포 구조는 비교적 보존된다. 원인 불명인 COP와 이차성 OP를 구분한다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p092-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P46",
      "wiki": {
        "lecture": 16,
        "heading": "Organizing pneumonia는 공기 공간 안에 수복 조직이 자란다"
      }
    },
    {
      "key": "16-3011c8a84721-masson",
      "lecture": 16,
      "order": 56,
      "target": "masson",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-3011c8a84721.jpg",
      "width": 793,
      "height": 610,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포나 폐포관의 내강을 채우는 느슨한 섬유모세포성 육아조직 마개다. 내강 안에 위치하고 원래 폐포 골격이 남는 것이 OP의 핵심이다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p093-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P47",
      "wiki": {
        "lecture": 16,
        "heading": "Organizing pneumonia는 공기 공간 안에 수복 조직이 자란다"
      }
    },
    {
      "key": "16-67322ed8c9ea-sarcoid",
      "lecture": 16,
      "order": 58,
      "target": "sarcoid",
      "kind": "disease",
      "image": "assets/pathology-drill/img-67322ed8c9ea.jpg",
      "width": 849,
      "height": 666,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "잘 형성된 비괴사성 상피양 육아종이 특징이다. 기관지혈관 주위·흉막 등 림프관 경로를 따른다. 감염 배제와 임상 소견을 함께 확인한다.",
      "pool": [
        "sarcoid",
        "tb",
        "hp",
        "crypto",
        "plch",
        "silicosis"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p095-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P48",
      "wiki": {
        "lecture": 16,
        "heading": "Sarcoidosis는 잘 형성된 육아종이 림프관을 따른다"
      }
    },
    {
      "key": "16-7161dcaa075d-nonnecgran",
      "lecture": 16,
      "order": 59,
      "target": "nonnecgran",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-7161dcaa075d.jpg",
      "width": 920,
      "height": 648,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "상피양 조직구가 경계가 뚜렷한 집합을 이루지만 중심 괴사가 두드러지지 않는다. 대표적으로 sarcoidosis에서 보며 감염 등 다른 원인도 배제한다.",
      "pool": [
        "necgran",
        "nonnecgran",
        "loosegran",
        "op",
        "uip",
        "nsip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p096-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P49",
      "wiki": {
        "lecture": 16,
        "heading": "Sarcoidosis는 잘 형성된 육아종이 림프관을 따른다"
      }
    },
    {
      "key": "16-4df17a3b3038-asteroid",
      "lecture": 16,
      "order": 59,
      "target": "asteroid",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-4df17a3b3038.jpg",
      "width": 786,
      "height": 549,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "다핵거대세포 안의 별 모양 호산성 봉입체다. Sarcoidosis에서 볼 수 있으나 그 질환에만 특이적이지는 않다.",
      "pool": [
        "asteroid",
        "schaumann",
        "asbestosbody",
        "anthracosis",
        "silicotic",
        "charcot"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p096-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P50",
      "wiki": {
        "lecture": 16,
        "heading": "Sarcoidosis는 잘 형성된 육아종이 림프관을 따른다"
      }
    },
    {
      "key": "16-123e4e25f063-hp",
      "lecture": 16,
      "order": 60,
      "target": "hp",
      "kind": "disease",
      "image": "assets/pathology-drill/img-123e4e25f063.jpg",
      "width": 504,
      "height": 786,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "세기관지 중심의 간질 염증에 작고 느슨한 비괴사성 육아종이 섞인다. 만성화하면 섬유화가 생기므로 노출력과 함께 판단한다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p099-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P51",
      "wiki": {
        "lecture": 16,
        "heading": "과민폐렴은 노출력과 세기관지 주위의 느슨한 육아종을 묶는다"
      }
    },
    {
      "key": "16-6d624ce341f4-loosegran",
      "lecture": 16,
      "order": 61,
      "target": "loosegran",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-6d624ce341f4.jpg",
      "width": 1030,
      "height": 697,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "조직구와 소수의 거대세포가 작고 느슨한 집합을 이룬다. 세기관지 중심 간질 염증과 동반되면 과민폐렴의 중요한 단서다.",
      "pool": [
        "necgran",
        "nonnecgran",
        "loosegran",
        "op",
        "uip",
        "nsip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p100-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P52",
      "wiki": {
        "lecture": 16,
        "heading": "과민폐렴은 노출력과 세기관지 주위의 느슨한 육아종을 묶는다"
      }
    },
    {
      "key": "16-a6ecb942c4aa-eosinophil",
      "lecture": 16,
      "order": 62,
      "target": "eosinophil",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-a6ecb942c4aa.jpg",
      "width": 705,
      "height": 897,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "대개 두 엽의 핵과 선명한 붉은 세포질 과립을 가진다. 호산구성 폐렴·알레르기·기생충 등에서 증가하며 세포 하나만으로 원인을 단정하지 않는다.",
      "pool": [
        "type2",
        "eosinophil",
        "siderophage",
        "langhans",
        "goblet",
        "neutrophil"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p103-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P53",
      "wiki": {
        "lecture": 16,
        "heading": "폐호산구증가증은 원인과 시간 경과를 나눈다"
      }
    },
    {
      "key": "16-e63eca9f3a3b-dip",
      "lecture": 16,
      "order": 63,
      "target": "dip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-e63eca9f3a3b.jpg",
      "width": 1015,
      "height": 808,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 공간을 대식세포가 넓고 비교적 균일하게 채운다. 세포질의 갈색 색소와 경한 중격 비후를 볼 수 있고 흡연과 연관된다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p106-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P54",
      "wiki": {
        "lecture": 16,
        "heading": "DIP와 RB-ILD는 갈색 대식세포의 분포가 다르다"
      }
    },
    {
      "key": "16-8d33c1a7f6b3-rbild",
      "lecture": 16,
      "order": 64,
      "target": "rbild",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-8d33c1a7f6b3.jpg",
      "width": 511,
      "height": 432,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "갈색 색소를 가진 대식세포가 호흡세기관지와 바로 주변 폐포에 집중된다. 넓게 퍼진 DIP와 달리 세기관지 중심 분포를 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p107-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P55",
      "wiki": {
        "lecture": 16,
        "heading": "DIP와 RB-ILD는 갈색 대식세포의 분포가 다르다"
      }
    },
    {
      "key": "16-7cd6c918953c-plch",
      "lecture": 16,
      "order": 66,
      "target": "plch",
      "kind": "disease",
      "image": "assets/pathology-drill/img-7cd6c918953c.jpg",
      "width": 811,
      "height": 630,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "핵에 홈이 있는 Langerhans 세포가 호산구와 함께 침윤한다. CD1a·langerin·S100 양성이며 흡연, 세기관지 중심 결절·낭성 변화와 연결한다.",
      "pool": [
        "cwp",
        "silicosis",
        "asbestosis",
        "plch",
        "sarcoid",
        "hp"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p109-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P56",
      "wiki": {
        "lecture": 16,
        "heading": "PLCH는 흡연·낭성 변화·Langerhans 세포를 연결한다"
      }
    },
    {
      "key": "16-b6dbe00c30be-pap",
      "lecture": 16,
      "order": 67,
      "target": "pap",
      "kind": "disease",
      "image": "assets/pathology-drill/img-b6dbe00c30be.jpg",
      "width": 816,
      "height": 653,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "폐포 안을 과립성·호산성 surfactant 물질이 채우며 PAS 양성이다. 폐포중격 자체는 비교적 보존되고 염증은 심하지 않을 수 있다.",
      "pool": [
        "edema",
        "hemorrhage",
        "neutrophil",
        "pap",
        "dip",
        "dad",
        "op"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p110-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P57",
      "wiki": {
        "lecture": 16,
        "heading": "폐포단백증은 surfactant를 치우지 못해 생긴다"
      }
    },
    {
      "key": "16-201f3ba2b9f0-cwp",
      "lecture": 16,
      "order": 69,
      "target": "cwp",
      "kind": "disease",
      "image": "assets/pathology-drill/img-201f3ba2b9f0.jpg",
      "width": 671,
      "height": 703,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "탄분을 포함한 macule·nodule과 섬유화가 보인다. 진행하면 검은 거대한 반흔을 만드는 progressive massive fibrosis가 생긴다.",
      "pool": [
        "cwp",
        "silicosis",
        "asbestosis",
        "plch",
        "sarcoid",
        "hp"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p119-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P58",
      "wiki": {
        "lecture": 16,
        "heading": "탄광부진폐증은 탄분 축적에서 거대한 섬유성 반흔까지 이어진다"
      }
    },
    {
      "key": "16-0b31663632dc-anthracosis",
      "lecture": 16,
      "order": 69,
      "target": "anthracosis",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-0b31663632dc.jpg",
      "width": 587,
      "height": 412,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "대식세포와 간질·림프관 주변에 검은 탄분이 쌓인다. 색소만으로 복잡성 진폐증을 뜻하지는 않으며 섬유화의 양과 분포를 함께 본다.",
      "pool": [
        "asteroid",
        "schaumann",
        "asbestosbody",
        "anthracosis",
        "silicotic",
        "charcot"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p119-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P59",
      "wiki": {
        "lecture": 16,
        "heading": "탄광부진폐증은 탄분 축적에서 거대한 섬유성 반흔까지 이어진다"
      }
    },
    {
      "key": "16-3bc11395fdd1-silicosis",
      "lecture": 16,
      "order": 70,
      "target": "silicosis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-3bc11395fdd1.jpg",
      "width": 808,
      "height": 794,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "상엽 우세의 단단한 섬유성 결절과 동심원성 collagen이 특징이다. 편광에서 입자를 확인할 수 있고 결핵 위험이 증가한다.",
      "pool": [
        "cwp",
        "silicosis",
        "asbestosis",
        "plch",
        "sarcoid",
        "hp"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p122-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P60",
      "wiki": {
        "lecture": 16,
        "heading": "규소폐증은 상엽의 소용돌이 collagen 결절이 특징이다"
      }
    },
    {
      "key": "16-921fe27ede67-silicotic",
      "lecture": 16,
      "order": 71,
      "target": "silicotic",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-921fe27ede67.jpg",
      "width": 604,
      "height": 858,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "중심의 치밀한 collagen이 소용돌이 또는 동심원으로 배열된 결절이다. 주변의 먼지를 먹은 대식세포와 함께 읽는다.",
      "pool": [
        "asteroid",
        "schaumann",
        "asbestosbody",
        "anthracosis",
        "silicotic",
        "charcot"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p123-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P61",
      "wiki": {
        "lecture": 16,
        "heading": "규소폐증은 상엽의 소용돌이 collagen 결절이 특징이다"
      }
    },
    {
      "key": "16-4ce01e07fedf-asbestosis",
      "lecture": 16,
      "order": 73,
      "target": "asbestosis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-4ce01e07fedf.jpg",
      "width": 712,
      "height": 809,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "하엽·흉막하 중심 섬유화와 asbestos body를 함께 읽는다. 섬유화는 UIP처럼 보일 수 있으며 노출력과 흉막판이 보조 단서다.",
      "pool": [
        "cwp",
        "silicosis",
        "asbestosis",
        "plch",
        "sarcoid",
        "hp"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p126-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "5"
      ],
      "id": "P62",
      "wiki": {
        "lecture": 16,
        "heading": "석면증은 하엽·흉막하 섬유화와 asbestos body를 찾는다"
      }
    },
    {
      "key": "16-5742d3f6a727-asbestosbody",
      "lecture": 16,
      "order": 74,
      "target": "asbestosbody",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-5742d3f6a727.jpg",
      "width": 722,
      "height": 897,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "투명한 중심 섬유를 철 함유 단백질이 감싸 황갈색 막대처럼 보인다. 구슬처럼 분절되거나 양끝이 두꺼운 모양이 특징이다.",
      "pool": [
        "asteroid",
        "schaumann",
        "asbestosbody",
        "anthracosis",
        "silicotic",
        "charcot"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p127-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "5"
      ],
      "id": "P63",
      "wiki": {
        "lecture": 16,
        "heading": "석면증은 하엽·흉막하 섬유화와 asbestos body를 찾는다"
      }
    },
    {
      "key": "16-c0d752e7051e-asbestosbody",
      "lecture": 16,
      "order": 75,
      "target": "asbestosbody",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-c0d752e7051e.jpg",
      "width": 585,
      "height": 785,
      "arrow": [
        75,
        76,
        44,
        48
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "투명한 중심 섬유를 철 함유 단백질이 감싸 황갈색 막대처럼 보인다. 구슬처럼 분절되거나 양끝이 두꺼운 모양이 특징이다.",
      "pool": [
        "asteroid",
        "schaumann",
        "asbestosbody",
        "anthracosis",
        "silicotic",
        "charcot"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p128-figures.jpg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "5"
      ],
      "id": "P64",
      "wiki": {
        "lecture": 16,
        "heading": "석면증은 하엽·흉막하 섬유화와 asbestos body를 찾는다"
      }
    },
    {
      "key": "16-6f4fdfd1472b-plaque",
      "lecture": 16,
      "order": 76,
      "target": "plaque",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-6f4fdfd1472b.jpg",
      "width": 1050,
      "height": 719,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "벽측흉막에 생기는 경계가 뚜렷한 단단한 collagen 판이다. 석회화될 수 있으며 석면 노출의 표지다. 그 자체가 중피종 전구병변은 아니다.",
      "pool": [
        "plaque",
        "sft",
        "meso",
        "pleuritis",
        "empyema",
        "hamartoma"
      ],
      "source": {
        "label": "16강 Wiki",
        "origin": "assets/lecture-16/p129-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P65",
      "wiki": {
        "lecture": 16,
        "heading": "흉막판은 노출의 흔적이지 중피종의 전구병변이 아니다"
      }
    },
    {
      "key": "16-f0432d474fff-rbild",
      "lecture": 16,
      "order": 191.58,
      "target": "rbild",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-f0432d474fff.jpg",
      "width": 528,
      "height": 396,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "흡연 색소를 가진 대식세포가 호흡세기관지와 주변 공기 공간에 집중되는 respiratory bronchiolitis 형태다. 임상적 ILD 여부는 증상·영상·폐기능을 함께 평가한다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3157944/",
        "title": "Pathogenic triad in COPD: oxidative stress, protease–antiprotease imbalance, and inflammation",
        "license": "This is an Open Access article which permits unrestricted noncommercial use, provided the original work is properly cited.",
        "caption": "Histologic features of small airways disease. A section of lung tissue shows accumulation of macrophages with smoker’s pigment (arrow) within and around a respiratory bronchiole (arrow head). Note:  Hemotoxylin-eosin, original magnification ×200.",
        "label": "외부 증례 · PMC3157944",
        "origin": "PMC3157944 f3-copd-6-413",
        "authors": "Bernard M Fischer, Elizabeth Pavlisko, Judith A Voynow",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P66",
      "wiki": {
        "lecture": 16,
        "heading": "DIP와 RB-ILD는 갈색 대식세포의 분포가 다르다"
      }
    },
    {
      "key": "16-c607d24fd638-uip",
      "lecture": 16,
      "order": 191.59,
      "target": "uip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-c607d24fd638.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "정상 폐, 치밀한 오래된 섬유화, 새로운 fibroblastic focus가 불균일하게 섞인다. 흉막하·격막주위 분포와 honeycomb change를 함께 본다. UIP는 패턴이며 IPF 외 질환에서도 나타난다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Usual interstitial pneumonia .  The UIP pattern shows honey combing and fibroblastic foci (haematoxylin eosin stain (HE), original magnification 100x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F2",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P67",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-e4b4a2a6f8ee-nsip",
      "lecture": 16,
      "order": 191.6,
      "target": "nsip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-e4b4a2a6f8ee.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포중격의 염증이나 섬유화가 비교적 균일한 시기와 분포를 보인다. cellular와 fibrotic 양상이 있으며 전체적으로 고른 변화를 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Non specific interstitial pneumonia .  A mesh-like fibrosis of the alveolar septa is seen. Fibroblastic foci are not found. Aggregates of lymphocytes are sometimes found (HE, original magnification 40x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F3",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P68",
      "wiki": {
        "lecture": 16,
        "heading": "NSIP는 병변의 시간이 비교적 균일하다"
      }
    },
    {
      "key": "16-540cbfc12883-rbild",
      "lecture": 16,
      "order": 191.61,
      "target": "rbild",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-540cbfc12883.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "갈색 색소를 가진 대식세포가 호흡세기관지와 바로 주변 폐포에 집중된다. 넓게 퍼진 DIP와 달리 세기관지 중심 분포를 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Respiratory bronchiolitis with interstiatial lung disease .  In RBILD bronchiolocentric aggregates of macrophages and an associated interstitial fibrosis are seen (HE, original magnification 40x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F4",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P69",
      "wiki": {
        "lecture": 16,
        "heading": "DIP와 RB-ILD는 갈색 대식세포의 분포가 다르다"
      }
    },
    {
      "key": "16-980d853c3a8c-dip",
      "lecture": 16,
      "order": 191.62,
      "target": "dip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-980d853c3a8c.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 공간을 대식세포가 넓고 비교적 균일하게 채운다. 세포질의 갈색 색소와 경한 중격 비후를 볼 수 있고 흡연과 연관된다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Desquamative interstitial pneumonia .  A pronounced diffuse intraalveolar aggregation of macrophages and an interstitial fibrosis can be found in DIP (HE. original magnification 40x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F5",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P70",
      "wiki": {
        "lecture": 16,
        "heading": "DIP와 RB-ILD는 갈색 대식세포의 분포가 다르다"
      }
    },
    {
      "key": "16-88911fcf23a1-op",
      "lecture": 16,
      "order": 191.63,
      "target": "masson",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-88911fcf23a1.jpg",
      "width": 600,
      "height": 475,
      "arrow": [
        77,
        83,
        47,
        56
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "화살표는 공기 공간 안으로 자란 느슨한 섬유모세포성 마개인 Masson body를 가리킨다. 이러한 마개가 organizing pneumonia의 핵심 소견이다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Cryptogenic organizing pneumonia.  In alveolar ducts and bronchioles buds of granulation tissue are detected (HE, original magnification 100x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F6",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [],
      "id": "P71",
      "wiki": {
        "lecture": 16,
        "heading": "Organizing pneumonia는 공기 공간 안에 수복 조직이 자란다"
      }
    },
    {
      "key": "16-2e1a76b18ca0-lip",
      "lecture": 16,
      "order": 191.64,
      "target": "lip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2e1a76b18ca0.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "림프구·형질세포가 폐간질을 넓게 침윤하며 림프소포와 배중심이 동반될 수 있다. 림프구성 간질 침윤이 중심인 패턴이다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Lymphocytic interstitial pneumonia .  Prominent infiltrates of lymphocytes and plasmacells and some germinal centers are seen (HE, original magnification 40x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F7",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P72",
      "wiki": {
        "lecture": 16,
        "heading": "NSIP는 병변의 시간이 비교적 균일하다"
      }
    },
    {
      "key": "16-227a6c6da256-hp",
      "lecture": 16,
      "order": 191.65,
      "target": "hp",
      "kind": "disease",
      "image": "assets/pathology-drill/img-227a6c6da256.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "세기관지 중심의 간질 염증에 작고 느슨한 비괴사성 육아종이 섞인다. 만성화하면 섬유화가 생기므로 노출력과 함께 판단한다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Hypersensitivity pneumonitis.  Interstitial infiltrates of lymphocytes and plasmacells and some aggregates of histiocytic cells are found (HE, original magnification 100x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F8",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P73",
      "wiki": {
        "lecture": 16,
        "heading": "과민폐렴은 노출력과 세기관지 주위의 느슨한 육아종을 묶는다"
      }
    },
    {
      "key": "16-0c04dcdd5ada-plch",
      "lecture": 16,
      "order": 191.66,
      "target": "plch",
      "kind": "disease",
      "image": "assets/pathology-drill/img-0c04dcdd5ada.jpg",
      "width": 600,
      "height": 475,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "핵에 홈이 있는 Langerhans 세포가 호산구와 함께 침윤한다. CD1a·langerin·S100 양성이며 흡연, 세기관지 중심 결절·낭성 변화와 연결한다.",
      "pool": [
        "cwp",
        "silicosis",
        "asbestosis",
        "plch",
        "sarcoid",
        "hp"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3534509/",
        "title": "Diagnostic approach to interstitial pneumonias in a single centre: report on 88 cases",
        "license": "https://creativecommons.org/licenses/by/2.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution License (\n http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Langerhans cell histiocytosis .  Patchy infiltrates of histiocytes, lymphocytes and plasmacells are seen (HE, original magnification 100x).",
        "label": "외부 증례 · PMC3534509",
        "origin": "PMC3534509 F9",
        "authors": "Dirk Theegarten, Heike Maria Müller, Francesco Bonella, Jeremias Wohlschlaeger, Ulrich Costabel",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P74",
      "wiki": {
        "lecture": 16,
        "heading": "PLCH는 흡연·낭성 변화·Langerhans 세포를 연결한다"
      }
    },
    {
      "key": "16-8cf5d56d6f89-uip",
      "lecture": 16,
      "order": 191.67,
      "target": "uip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-8cf5d56d6f89.jpg",
      "width": 308,
      "height": 236,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "정상 폐, 치밀한 오래된 섬유화, 새로운 fibroblastic focus가 불균일하게 섞인다. 흉막하·격막주위 분포와 honeycomb change를 함께 본다. UIP는 패턴이며 IPF 외 질환에서도 나타난다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9487316/",
        "title": "Differential diagnosis of usual interstitial pneumonia: when is it truly idiopathic?",
        "license": "ERR articles are open access and distributed under the terms of the  Creative Commons Attribution Non-Commercial Licence 4.0 .",
        "caption": "a) Open lung biopsy showing fibrotic lung disease with heterogeneous spatial and temporal fibrosis consistent with a usual interstitial pneumonia pattern (haematoxylin and eosin stain, 40×). b) Honeycomb change with enlarged subpleural alveolar spaces with bronchiolar metaplasia, mucus plugs, and mild chronic inflammatory infiltrate (haematoxylin and eosin stain, 40×).",
        "label": "외부 증례 · PMC9487316",
        "origin": "PMC9487316 err-23-133-308-f02",
        "authors": "",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P75",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-04936b0a80a4-honeycomb",
      "lecture": 16,
      "order": 191.68,
      "target": "honeycomb",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-04936b0a80a4.jpg",
      "width": 308,
      "height": 236,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "섬유화로 재형성된 낭성 공간이 모여 벌집처럼 보인다. 낭성 공간은 세기관지형 상피로 덮이고 점액을 포함할 수 있다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9487316/",
        "title": "Differential diagnosis of usual interstitial pneumonia: when is it truly idiopathic?",
        "license": "ERR articles are open access and distributed under the terms of the  Creative Commons Attribution Non-Commercial Licence 4.0 .",
        "caption": "a) Open lung biopsy showing fibrotic lung disease with heterogeneous spatial and temporal fibrosis consistent with a usual interstitial pneumonia pattern (haematoxylin and eosin stain, 40×). b) Honeycomb change with enlarged subpleural alveolar spaces with bronchiolar metaplasia, mucus plugs, and mild chronic inflammatory infiltrate (haematoxylin and eosin stain, 40×).",
        "label": "외부 증례 · PMC9487316",
        "origin": "PMC9487316 err-23-133-308-f02",
        "authors": "",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P76",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-d358a45f8a4c-ff",
      "lecture": 16,
      "order": 191.69,
      "target": "ff",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-d358a45f8a4c.jpg",
      "width": 308,
      "height": 236,
      "arrow": [
        74,
        73,
        40,
        44
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "기존 폐조직과 섬유화 경계에 볼록한 작은 섬유모세포·근섬유모세포 집합이 보인다. 점액성 바탕과 표면 상피로 덮인 새로운 섬유화 병변이다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9487316/",
        "title": "Differential diagnosis of usual interstitial pneumonia: when is it truly idiopathic?",
        "license": "ERR articles are open access and distributed under the terms of the  Creative Commons Attribution Non-Commercial Licence 4.0 .",
        "caption": "Usual interstitial pneumonia pattern in two patients with idiopathic pulmonary fibrosis. a) At low magnification, subpleural/paraseptal scars obscuring the alveolar architecture alternate with normal lung (“patchy fibrosis”). At the top, two areas of honeycombing can be observed (haematoxylin and eosin stain, 20×). b) At higher magnification a fibroblastic focus, consisting of a dome-shaped collection of fibroblasts/myofibroblasts embedded in a myxoid matrix and covered by hyperplastic pneumocytes, is observed. Note the pale grey colour of the fibroblastic focus, contrasting with the pink colour of the underlying scar (haematoxylin and eosin stain, 400×).",
        "label": "외부 증례 · PMC9487316",
        "origin": "PMC9487316 err-23-133-308-f04",
        "authors": "",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "4"
      ],
      "id": "P77",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "16-6f4d2332c407-hp",
      "lecture": 16,
      "order": 191.7,
      "target": "hp",
      "kind": "disease",
      "image": "assets/pathology-drill/img-6f4d2332c407.jpg",
      "width": 308,
      "height": 234,
      "arrow": null,
      "question": "노출력과 세기관지 중심 bridging fibrosis가 있는 사례의 조직이다. 해당 질환은?",
      "note": "만성 과민폐렴 사례의 거대세포와 cholesterol cleft를 보이는 시야다. 다른 시야의 세기관지 중심 손상·bridging fibrosis와 함께 해석한다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9487316/",
        "title": "Differential diagnosis of usual interstitial pneumonia: when is it truly idiopathic?",
        "license": "ERR articles are open access and distributed under the terms of the  Creative Commons Attribution Non-Commercial Licence 4.0 .",
        "caption": "Chronic hypersensitivity pneumonitis with usual interstitial pneumonia pattern. a) At low magnification, bronchiolar damage with bridging fibrosis between bronchiole and pleura are the clues suggesting chronic hypersensitivity pneumonitis (haematoxylin and eosin stain, 20×). b) At higher magnification, a few inconspicuous interstitial granulomas, consisting of isolated giant cells with cholesterol clefts, can be observed (haematoxylin and eosin stain, 200×).",
        "label": "외부 증례 · PMC9487316",
        "origin": "PMC9487316 err-23-133-308-f05",
        "authors": "",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P78",
      "wiki": {
        "lecture": 16,
        "heading": "과민폐렴은 노출력과 세기관지 주위의 느슨한 육아종을 묶는다"
      }
    },
    {
      "key": "17-4152855805c8-bronchopneumonia",
      "lecture": 17,
      "order": 79,
      "target": "bronchopneumonia",
      "kind": "disease",
      "image": "assets/pathology-drill/img-4152855805c8.jpg",
      "width": 563,
      "height": 790,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "기관지·세기관지 주위의 반점 모양 화농성 병변이 여러 군데 흩어진다. 서로 합쳐질 수 있지만 초기 분포는 국소적·산재성이다.",
      "pool": [
        "bronchopneumonia",
        "lobar",
        "abscess",
        "tb",
        "pjp",
        "crypto"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p139-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P79",
      "wiki": {
        "lecture": 17,
        "heading": "세균성 폐렴은 폐포를 염증성 삼출물이 채운다"
      }
    },
    {
      "key": "17-c21b07c2f014-lobar",
      "lecture": 17,
      "order": 79,
      "target": "lobar",
      "kind": "disease",
      "image": "assets/pathology-drill/img-c21b07c2f014.jpg",
      "width": 562,
      "height": 790,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "한 엽의 넓은 부위가 연속적으로 경화된다. 울혈·적색간화·회색간화·해소로 이어지는 폐포 내 삼출의 변화를 읽는다.",
      "pool": [
        "bronchopneumonia",
        "lobar",
        "abscess",
        "tb",
        "pjp",
        "crypto"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p139-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P80",
      "wiki": {
        "lecture": 17,
        "heading": "엽폐렴은 울혈·적색간화·회색간화·해소를 거친다"
      }
    },
    {
      "key": "17-2eca06051af9-neutrophil",
      "lecture": 17,
      "order": 80,
      "target": "neutrophil",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2eca06051af9.jpg",
      "width": 929,
      "height": 536,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 공간을 다핵 호중구와 fibrin이 채운다. 세균성 폐렴에서 흔한 화농성 삼출 양상이다.",
      "pool": [
        "edema",
        "hemorrhage",
        "neutrophil",
        "pap",
        "dip",
        "dad",
        "op"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p140-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P81",
      "wiki": {
        "lecture": 17,
        "heading": "세균성 폐렴은 폐포를 염증성 삼출물이 채운다"
      }
    },
    {
      "key": "17-4603dfab054e-abscess",
      "lecture": 17,
      "order": 81,
      "target": "abscess",
      "kind": "disease",
      "image": "assets/pathology-drill/img-4603dfab054e.jpg",
      "width": 607,
      "height": 898,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "폐실질이 화농성 염증으로 괴사해 고름을 담은 공동이 형성된다. 중심의 액화괴사와 주위 염증·조직 파괴가 핵심이다.",
      "pool": [
        "bronchopneumonia",
        "lobar",
        "abscess",
        "tb",
        "pjp",
        "crypto"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p149-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P82",
      "wiki": {
        "lecture": 17,
        "heading": "폐농양은 조직 괴사로 생긴 고름집이다"
      }
    },
    {
      "key": "17-0860efef8104-tb",
      "lecture": 17,
      "order": 83,
      "target": "tb",
      "kind": "disease",
      "image": "assets/pathology-drill/img-0860efef8104.jpg",
      "width": 542,
      "height": 900,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "흉막하의 일차 폐 병소와 폐문 림프절 병변을 함께 보이는 Ghon complex이다. 병소와 림프절의 위치를 연결해 읽는다.",
      "pool": [
        "bronchopneumonia",
        "lobar",
        "abscess",
        "tb",
        "pjp",
        "crypto"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p153-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "6"
      ],
      "id": "P83",
      "wiki": {
        "lecture": 17,
        "heading": "결핵은 일차 병소·재활성 병소·파종을 구분한다"
      }
    },
    {
      "key": "17-82d3fd8f60b7-tb",
      "lecture": 17,
      "order": 85,
      "target": "tb",
      "kind": "disease",
      "image": "assets/pathology-drill/img-82d3fd8f60b7.jpg",
      "width": 649,
      "height": 786,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "건락괴사성 육아종과 항산균이 주요 단서다. 재활성 결핵은 상엽 공동, 파종은 수많은 작은 결절로 나타날 수 있다.",
      "pool": [
        "bronchopneumonia",
        "lobar",
        "abscess",
        "tb",
        "pjp",
        "crypto"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p155-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "6"
      ],
      "id": "P84",
      "wiki": {
        "lecture": 17,
        "heading": "결핵은 일차 병소·재활성 병소·파종을 구분한다"
      }
    },
    {
      "key": "17-f633931dccd2-necgran",
      "lecture": 17,
      "order": 86,
      "target": "necgran",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-f633931dccd2.jpg",
      "width": 965,
      "height": 370,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "중심의 무정형 괴사 주위를 상피양 조직구와 다핵거대세포가 둘러싼다. 결핵·진균 감염 등을 고려하고 특수염색으로 원인을 확인한다.",
      "pool": [
        "necgran",
        "nonnecgran",
        "loosegran",
        "op",
        "uip",
        "nsip"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p156-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "6"
      ],
      "id": "P85",
      "wiki": {
        "lecture": 17,
        "heading": "괴사성 육아종에서는 항산균과 진균을 찾는다"
      }
    },
    {
      "key": "17-e3a41254544e-afb",
      "lecture": 17,
      "order": 87,
      "target": "afb",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-e3a41254544e.jpg",
      "width": 1030,
      "height": 678,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "Ziehl–Neelsen 염색에서 가늘고 붉은 막대균이 보인다. 결핵 등 항산균 감염을 뒷받침하며 염색만으로 균종을 모두 구분하지는 않는다.",
      "pool": [
        "afb",
        "paragonimus",
        "asperhypha",
        "cryptoyeast",
        "pjpcyst",
        "mucorhypha"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p157-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "6"
      ],
      "id": "P86",
      "wiki": {
        "lecture": 17,
        "heading": "괴사성 육아종에서는 항산균과 진균을 찾는다"
      }
    },
    {
      "key": "17-8902dad054db-pjp",
      "lecture": 17,
      "order": 89,
      "target": "pjp",
      "kind": "disease",
      "image": "assets/pathology-drill/img-8902dad054db.jpg",
      "width": 910,
      "height": 704,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "폐포 안의 거품 모양 삼출물과 GMS에서 보이는 컵·초승달 모양 낭포를 연결한다. 면역저하 환자에서 중요하다.",
      "pool": [
        "bronchopneumonia",
        "lobar",
        "abscess",
        "tb",
        "pjp",
        "crypto"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p160-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P87",
      "wiki": {
        "lecture": 17,
        "heading": "Pneumocystis는 폐포 안의 거품 모양 물질과 균체를 찾는다"
      }
    },
    {
      "key": "17-157075a51ce7-pjpcyst",
      "lecture": 17,
      "order": 90,
      "target": "pjpcyst",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-157075a51ce7.jpg",
      "width": 746,
      "height": 652,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "GMS에서 작은 컵·초승달 모양의 낭포벽이 염색된다. 폐포 내 거품 모양 삼출물과 함께 P. jirovecii를 확인하는 단서다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p161-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P88",
      "wiki": {
        "lecture": 17,
        "heading": "Pneumocystis는 폐포 안의 거품 모양 물질과 균체를 찾는다"
      }
    },
    {
      "key": "17-e18b721a5a27-asperhypha",
      "lecture": 17,
      "order": 92,
      "target": "asperhypha",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-e18b721a5a27.jpg",
      "width": 615,
      "height": 896,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "굵기가 비교적 균일한 가는 균사에 격벽이 있고 약 45°의 예각으로 분지한다. Aspergillus의 대표적인 조직 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p163-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P89",
      "wiki": {
        "lecture": 17,
        "heading": "진균은 균사·격벽·분지와 효모의 출아를 읽는다"
      }
    },
    {
      "key": "17-0900cd8d295e-mucorhypha",
      "lecture": 17,
      "order": 92,
      "target": "mucorhypha",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-0900cd8d295e.jpg",
      "width": 615,
      "height": 897,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "넓고 불규칙한 리본 모양 균사에 격벽이 적으며 대체로 직각에 가까운 분지를 보인다. Mucorales를 시사한다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p163-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P90",
      "wiki": {
        "lecture": 17,
        "heading": "진균은 균사·격벽·분지와 효모의 출아를 읽는다"
      }
    },
    {
      "key": "17-7301092eb21b-aspergilloma",
      "lecture": 17,
      "order": 93,
      "target": "aspergilloma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-7301092eb21b.jpg",
      "width": 796,
      "height": 897,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "이미 존재하던 폐 공동 안에 Aspergillus 균사가 덩어리로 모여 fungal ball을 이룬다. 균사 모양과 공동 안의 위치를 함께 확인한다.",
      "pool": [
        "aspergilloma",
        "crypto",
        "mucorDisease",
        "abpa",
        "candidiasis",
        "pjp"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p165-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P91",
      "wiki": {
        "lecture": 17,
        "heading": "Aspergillus는 공생·알레르기·침습을 구분한다"
      }
    },
    {
      "key": "17-1e9e36545641-abpa",
      "lecture": 17,
      "order": 94,
      "target": "abpa",
      "kind": "disease",
      "image": "assets/pathology-drill/img-1e9e36545641.jpg",
      "width": 488,
      "height": 734,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "기관지 안의 층상 알레르기성 점액과 호산구, 때로 소수의 균사가 보인다. 천식·과민반응·중심성 기관지확장과 연결한다.",
      "pool": [
        "aspergilloma",
        "crypto",
        "mucorDisease",
        "abpa",
        "candidiasis",
        "pjp"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p166-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P92",
      "wiki": {
        "lecture": 17,
        "heading": "Aspergillus는 공생·알레르기·침습을 구분한다"
      }
    },
    {
      "key": "17-bdc0ce345244-paragonimus",
      "lecture": 17,
      "order": 95,
      "target": "paragonimus",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-bdc0ce345244.jpg",
      "width": 871,
      "height": 428,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "갈색의 두꺼운 껍질과 한쪽 끝의 operculum을 가진 충란이다. 폐흡충 감염에서 객담·조직의 충란을 확인한다.",
      "pool": [
        "afb",
        "paragonimus",
        "asperhypha",
        "cryptoyeast",
        "pjpcyst",
        "mucorhypha"
      ],
      "source": {
        "label": "17강 Wiki",
        "origin": "assets/lecture-17/p168-figures.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P93",
      "wiki": {
        "lecture": 17,
        "heading": "폐흡충에서는 충란과 호산구성 반응을 함께 본다"
      }
    },
    {
      "key": "17-7e9aa671df88-asperhypha",
      "lecture": 17,
      "order": 191.54,
      "target": "asperhypha",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-7e9aa671df88.jpg",
      "width": 192,
      "height": 143,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "굵기가 비교적 균일한 가는 균사에 격벽이 있고 약 45°의 예각으로 분지한다. Aspergillus의 대표적인 조직 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2408600/",
        "title": "Nitrofurantoin-induced pulmonary fibrosis: a case report",
        "license": "This is an Open Access article distributed under the terms of the Creative Commons Attribution License ( http://creativecommons.org/licenses/by/2.0 ), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Hematoxylin and eosin, periodic acid Schiff, Grocott and Elastica von Gieson stained sections of sampled lung tissue . (a, b) Diffuse alveolar damage with denuded edematous alveolar septa with thick hyaline membranes and intra-alveolar hemorrhage. (c) Aspergilloma composed of radiating regularly branched fungal hyphae (periodic acid Schiff stain, insert: high magnification Grocott stain). (d, e, f) Lung parenchyma with severely distorted architecture consisting of established fibrosis with sharply angulated and cystically dilated bronchioli with inspissated secretions. In the interstitium a patchy lympho-histiocytic infiltrate is present (f). Bronchiolar smooth muscle hypertrophy (e) and squamous metaplasia (f) is seen.",
        "label": "외부 증례 · PMC2408600",
        "origin": "PMC2408600 F3",
        "authors": "",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P94",
      "wiki": {
        "lecture": 17,
        "heading": "진균은 균사·격벽·분지와 효모의 출아를 읽는다"
      }
    },
    {
      "key": "37-9b727cdb004e-lepidic",
      "lecture": 37,
      "order": 108,
      "target": "lepidic",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-9b727cdb004e.jpg",
      "width": 679,
      "height": 771,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "종양세포가 기존 폐포중격을 따라 한 층으로 자란다. 공기 공간과 폐포 골격이 남는다. 사진 한 장의 lepidic 양상만으로 침윤 여부 전체를 확정하지는 않는다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p24.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P95",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-3c8c773d8189-mucin",
      "lecture": 37,
      "order": 108,
      "target": "mucin",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-3c8c773d8189.jpg",
      "width": 679,
      "height": 771,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "종양세포질 안에 점액성 공포가 보인다. 샘 형성과 함께 샘암종의 분화를 뒷받침하며 필요하면 점액 염색을 사용한다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p24.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P96",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-de34a38ac175-adeno",
      "lecture": 37,
      "order": 110,
      "target": "adeno",
      "kind": "disease",
      "image": "assets/pathology-drill/img-de34a38ac175.jpg",
      "width": 644,
      "height": 399,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "종양세포가 샘 구조를 만들거나 세포질 내 점액을 가진다. Lepidic·acinar·papillary·micropapillary·solid 등 다양한 성장 양상이 있다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p25.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P97",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-ee8c1bb4e014-lepidic",
      "lecture": 37,
      "order": 111,
      "target": "lepidic",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-ee8c1bb4e014.jpg",
      "width": 506,
      "height": 386,
      "arrow": null,
      "question": "폐샘암종에서 보이는 성장 양상은?",
      "note": "종양세포가 기존 폐포중격을 따라 한 층으로 자란다. 공기 공간과 폐포 골격이 남는다. 사진 한 장의 lepidic 양상만으로 침윤 여부 전체를 확정하지는 않는다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p26.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P98",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-421dcd5a793d-acinar",
      "lecture": 37,
      "order": 111,
      "target": "acinar",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-421dcd5a793d.jpg",
      "width": 506,
      "height": 386,
      "arrow": null,
      "question": "폐샘암종에서 보이는 성장 양상은?",
      "note": "종양세포가 중심 내강을 갖는 샘 구조를 만든다. 간질 안에 분리된 샘들이 침윤하는 모습을 본다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p26.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P99",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-32eb701bdfe3-papillary",
      "lecture": 37,
      "order": 111,
      "target": "papillary",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-32eb701bdfe3.jpg",
      "width": 523,
      "height": 386,
      "arrow": null,
      "question": "폐샘암종에서 보이는 성장 양상은?",
      "note": "섬유혈관 중심을 가진 유두를 종양세포가 덮는다. 중심 기질의 존재가 핵심이다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p26.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P100",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-2a9339deec85-micropapillary",
      "lecture": 37,
      "order": 111,
      "target": "micropapillary",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2a9339deec85.jpg",
      "width": 436,
      "height": 386,
      "arrow": null,
      "question": "폐샘암종에서 보이는 성장 양상은?",
      "note": "섬유혈관 중심 없이 작은 종양세포 덩이가 유두처럼 모인다. 공기 공간 안에 떠 있는 작은 군집을 찾는다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p26.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P101",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-9c58a7668583-cribriform",
      "lecture": 37,
      "order": 111,
      "target": "cribriform",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-9c58a7668583.jpg",
      "width": 408,
      "height": 377,
      "arrow": null,
      "question": "폐샘암종에서 보이는 성장 양상은?",
      "note": "종양세포 덩이 안에 작은 내강이 여러 개 뚫려 체 같은 구조를 만든다. 복잡한 샘 구조에 속한다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p26.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P102",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종의 등급은 우세 양상과 고등급 성분의 비율을 함께 본다"
      }
    },
    {
      "key": "37-b02f1b50d9e0-solid",
      "lecture": 37,
      "order": 111,
      "target": "solid",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-b02f1b50d9e0.jpg",
      "width": 343,
      "height": 386,
      "arrow": null,
      "question": "폐샘암종에서 보이는 성장 양상은?",
      "note": "샘이나 유두 구조가 거의 없이 종양세포가 판상·둥지 모양으로 채운다. 샘암종의 solid형 판단에는 다른 분화 근거도 함께 확인한다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p26.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P103",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "37-de724f1743ed-keratin",
      "lecture": 37,
      "order": 114,
      "target": "keratin",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-de724f1743ed.jpg",
      "width": 361,
      "height": 440,
      "arrow": [
        82,
        84,
        48,
        56
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "종양세포 둥지 중심의 각질이 동심원으로 겹친 호산성 소용돌이 구조다. 잘 분화한 편평세포암의 대표적 소견이다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p29.jpg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "9"
      ],
      "id": "P104",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "37-2f12024e9931-bridge",
      "lecture": 37,
      "order": 114,
      "target": "bridge",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-2f12024e9931.jpg",
      "width": 306,
      "height": 440,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "인접한 편평분화 세포 사이가 가는 가시·다리처럼 이어진다. 세포 경계와 세포 사이의 연결을 고배율에서 읽는다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p29.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "9"
      ],
      "id": "P105",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "37-4d24d97e55a3-sclc",
      "lecture": 37,
      "order": 116,
      "target": "sclc",
      "kind": "disease",
      "image": "assets/pathology-drill/img-4d24d97e55a3.jpg",
      "width": 593,
      "height": 358,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "세포질이 매우 적은 작은 종양세포가 빽빽하게 모이고 서로 핵의 모양을 누르는 nuclear molding이 나타난다. 미세한 chromatin, 많은 유사분열·괴사를 함께 본다. Chromogranin·synaptophysin·CD56 등 신경내분비 표지자가 분화를 뒷받침하며, 전자현미경에서는 dense-core neurosecretory granule을 볼 수 있다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p33.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "11"
      ],
      "id": "P106",
      "wiki": {
        "lecture": 37,
        "heading": "소세포암은 작은 세포와 높은 증식, TP53·RB1 소실이 만난다"
      }
    },
    {
      "key": "37-bd9a01f402cf-sclc",
      "lecture": 37,
      "order": 117,
      "target": "sclc",
      "kind": "disease",
      "image": "assets/pathology-drill/img-bd9a01f402cf.jpg",
      "width": 784,
      "height": 441,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "세포질이 매우 적은 작은 종양세포가 빽빽하게 모이고 서로 핵의 모양을 누르는 nuclear molding이 나타난다. 미세한 chromatin, 많은 유사분열·괴사를 함께 본다. Chromogranin·synaptophysin·CD56 등 신경내분비 표지자가 분화를 뒷받침하며, 전자현미경에서는 dense-core neurosecretory granule을 볼 수 있다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p34.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "11"
      ],
      "id": "P107",
      "wiki": {
        "lecture": 37,
        "heading": "소세포암은 작은 세포와 높은 증식, TP53·RB1 소실이 만난다"
      }
    },
    {
      "key": "37-4e4bd016192b-lcnec",
      "lecture": 37,
      "order": 119,
      "target": "lcnec",
      "kind": "disease",
      "image": "assets/pathology-drill/img-4e4bd016192b.jpg",
      "width": 547,
      "height": 290,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "큰 종양세포에 신경내분비성 organoid nesting·rosette·palisading이 나타난다. 높은 유사분열과 괴사, 신경내분비 표지자를 함께 평가한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p36.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P108",
      "wiki": {
        "lecture": 37,
        "heading": "LCNEC와 combined 소세포암은 다른 성분을 함께 확인한다"
      }
    },
    {
      "key": "37-f46dd3404bf7-carcinoid",
      "lecture": 37,
      "order": 121,
      "target": "carcinoid",
      "kind": "disease",
      "image": "assets/pathology-drill/img-f46dd3404bf7.jpg",
      "width": 463,
      "height": 313,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "비교적 균일한 신경내분비 세포가 둥지·띠·rosette를 이룬다. Salt-and-pepper chromatin이 특징이며 typical/atypical 분류에는 유사분열과 괴사를 평가한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p38.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P109",
      "wiki": {
        "lecture": 37,
        "heading": "Carcinoid는 괴사와 유사분열로 typical과 atypical을 나눈다"
      }
    },
    {
      "key": "37-1271d3aaeead-carcinoid",
      "lecture": 37,
      "order": 122,
      "target": "carcinoid",
      "kind": "disease",
      "image": "assets/pathology-drill/img-1271d3aaeead.jpg",
      "width": 762,
      "height": 497,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "비교적 균일한 신경내분비 세포가 둥지·띠·rosette를 이룬다. Salt-and-pepper chromatin이 특징이며 typical/atypical 분류에는 유사분열과 괴사를 평가한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p39.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P110",
      "wiki": {
        "lecture": 37,
        "heading": "Carcinoid는 괴사와 유사분열로 typical과 atypical을 나눈다"
      }
    },
    {
      "key": "37-eca474b3da27-hamartoma",
      "lecture": 37,
      "order": 124,
      "target": "hamartoma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-eca474b3da27.jpg",
      "width": 656,
      "height": 441,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "성숙 연골 사이에 지방과 틈새 모양의 기관지 상피가 섞인 양성 병변이다. 연골 하나보다 서로 다른 성숙 조직의 조합을 읽는다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p46.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P111",
      "wiki": {
        "lecture": 37,
        "heading": "연골과오종은 연골 사이에 기관지 상피와 지방이 섞인다"
      }
    },
    {
      "key": "37-064aa90ba08c-hamartoma",
      "lecture": 37,
      "order": 124,
      "target": "hamartoma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-064aa90ba08c.jpg",
      "width": 656,
      "height": 438,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "성숙 연골 사이에 지방과 틈새 모양의 기관지 상피가 섞인 양성 병변이다. 연골 하나보다 서로 다른 성숙 조직의 조합을 읽는다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p46.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P112",
      "wiki": {
        "lecture": 37,
        "heading": "연골과오종은 연골 사이에 기관지 상피와 지방이 섞인다"
      }
    },
    {
      "key": "37-bbeb67bee86d-sclerosing",
      "lecture": 37,
      "order": 126,
      "target": "sclerosing",
      "kind": "disease",
      "image": "assets/pathology-drill/img-bbeb67bee86d.jpg",
      "width": 535,
      "height": 300,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "표면 입방세포와 둥근 간질세포 두 세포군이 보이며 papillary·solid·sclerotic·hemorrhagic 양상이 섞인다. 두 세포군의 TTF-1 발현과 다른 상피표지자 차이를 확인한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki",
        "origin": "assets/lecture-37/pathology-p48.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P113",
      "wiki": {
        "lecture": 37,
        "heading": "경화폐포세포종은 두 세포군의 염색 차이가 핵심이다"
      }
    },
    {
      "key": "37-03e19903cd68-squamousmet",
      "lecture": 37,
      "order": 191.57,
      "target": "squamousmet",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-03e19903cd68.jpg",
      "width": 518,
      "height": 383,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "정상 호흡상피가 중층편평상피로 바뀐 것이다. 만성 자극에 대한 적응이며, 이형성이나 침윤과는 별도로 판단한다.",
      "pool": [
        "gland",
        "goblet",
        "basement",
        "squamousmet",
        "masson",
        "hyaline"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3157944/",
        "title": "Pathogenic triad in COPD: oxidative stress, protease–antiprotease imbalance, and inflammation",
        "license": "This is an Open Access article which permits unrestricted noncommercial use, provided the original work is properly cited.",
        "caption": "Histologic features of chronic bronchitis. ( A ) A section of bronchiole wall with luminal accumulation of mucous, goblet cell hyperplasia, basement membrane thickening (arrow), and scattered mononuclear inflammatory cells. ( B ) A bronchial wall with squamous metaplasia of the luminal epithelium (arrow head) and hyperplasia of the subepithelial seromucinous glands (arrow). Note:  Hemotoxylin-eosin, original magnification ×200.",
        "label": "외부 증례 · PMC3157944",
        "origin": "PMC3157944 f1-copd-6-413",
        "authors": "Bernard M Fischer, Elizabeth Pavlisko, Judith A Voynow",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P114",
      "wiki": {
        "lecture": 37,
        "heading": "전암병변은 기저막과 폐포 구조가 보존되는지부터 본다"
      }
    },
    {
      "key": "37-4f1981b86750-bridge",
      "lecture": 37,
      "order": 191.71,
      "target": "bridge",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-4f1981b86750.jpg",
      "width": 197,
      "height": 138,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "인접한 편평분화 세포 사이가 가는 가시·다리처럼 이어진다. 세포 경계와 세포 사이의 연결을 고배율에서 읽는다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6166010/",
        "title": "p40 Immunohistochemistry Is an Excellent Marker in Primary Lung Squamous Cell Carcinoma",
        "license": "https://creativecommons.org/licenses/by-nc/4.0/ This is an Open Access article distributed under the terms of the Creative Commons Attribution Non-Commercial License ( http://creativecommons.org/licenses/by-nc/4.0 ) which permits unrestricted non-commercial use, distribution, and reproduction in any medium, provided the original work is properly cited.",
        "caption": "Poorly differentiated tumour with squamous-like morphology. Tumour cells with abundant eosinophilic cytoplasm and distinct cell borders (A), intercellular bridges (B), and keratinization features (C).",
        "label": "외부 증례 · PMC6166010",
        "origin": "PMC6166010 f3-jptm-2018-08-14",
        "authors": "Khairunisa Ahmad Affandi, Nur Maya Sabrina Tizen, Muaatamarulain Mustangin, Reena Rahayu MdReena Rahayu Md Zin",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "9"
      ],
      "id": "P115",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "38-83d6ff8c179c-pleuritis",
      "lecture": 38,
      "order": 128,
      "target": "pleuritis",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-83d6ff8c179c.jpg",
      "width": 511,
      "height": 711,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "흉막 표면을 거친 fibrin 삼출물이 덮는다. 조직화되면 흉막의 유착과 섬유화로 이어진다.",
      "pool": [
        "plaque",
        "sft",
        "meso",
        "pleuritis",
        "empyema",
        "hamartoma"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p53.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P116",
      "wiki": {
        "lecture": 38,
        "heading": "흉막염이 조직화되면 유착과 섬유화가 남는다"
      }
    },
    {
      "key": "38-48ec2825ddb6-empyema",
      "lecture": 38,
      "order": 129,
      "target": "empyema",
      "kind": "disease",
      "image": "assets/pathology-drill/img-48ec2825ddb6.jpg",
      "width": 470,
      "height": 704,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "흉막강 안에 고름이 축적된 상태다. 폐실질 내부의 농양과 달리 고름이 있는 공간이 흉막강이다.",
      "pool": [
        "plaque",
        "sft",
        "meso",
        "pleuritis",
        "empyema",
        "hamartoma"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p54.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P117",
      "wiki": {
        "lecture": 38,
        "heading": "물, 피, 림프, 공기는 서로 다른 원인을 가리킨다"
      }
    },
    {
      "key": "38-ded46725a6f3-sft",
      "lecture": 38,
      "order": 130,
      "target": "sft",
      "kind": "disease",
      "image": "assets/pathology-drill/img-ded46725a6f3.jpg",
      "width": 586,
      "height": 428,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "방추세포가 collagen과 함께 일정한 배열 없이 자라고 staghorn 혈관이 섞인다. STAT6 핵 양성 및 NAB2–STAT6 fusion을 연결한다.",
      "pool": [
        "plaque",
        "sft",
        "meso",
        "pleuritis",
        "empyema",
        "hamartoma"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p57.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P118",
      "wiki": {
        "lecture": 38,
        "heading": "단발섬유종양은 CD34·STAT6와 NAB2-STAT6를 연결한다"
      }
    },
    {
      "key": "38-30d3e8111080-meso",
      "lecture": 38,
      "order": 131,
      "target": "meso",
      "kind": "disease",
      "image": "assets/pathology-drill/img-30d3e8111080.jpg",
      "width": 417,
      "height": 582,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "흉막을 따라 미만성으로 자라 폐를 감싸는 종양이다. 상피형·육종형·이상성 양상이 있으며 면역염색 패널과 분자 소견을 함께 평가한다.",
      "pool": [
        "plaque",
        "sft",
        "meso",
        "pleuritis",
        "empyema",
        "hamartoma"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p59.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P119",
      "wiki": {
        "lecture": 38,
        "heading": "중피종은 석면 노출과 미만성 흉막 비후를 연결한다"
      }
    },
    {
      "key": "38-f32470e80fed-meso",
      "lecture": 38,
      "order": 132,
      "target": "meso",
      "kind": "disease",
      "image": "assets/pathology-drill/img-f32470e80fed.jpg",
      "width": 744,
      "height": 552,
      "arrow": null,
      "question": "흉막을 따라 미만성으로 자란 종양의 조직이다. 해당 질환은?",
      "note": "흉막을 따라 미만성으로 자라 폐를 감싸는 종양이다. 상피형·육종형·이상성 양상이 있으며 면역염색 패널과 분자 소견을 함께 평가한다.",
      "pool": [
        "plaque",
        "sft",
        "meso",
        "pleuritis",
        "empyema",
        "hamartoma"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p61.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P120",
      "wiki": {
        "lecture": 38,
        "heading": "중피종은 석면 노출과 미만성 흉막 비후를 연결한다"
      }
    },
    {
      "key": "38-948710a84576-microvilli",
      "lecture": 38,
      "order": 135,
      "target": "microvilli",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-948710a84576.jpg",
      "width": 522,
      "height": 624,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "세포 표면에 길고 가는 미세융모가 많이 뻗는다. 전통적으로 중피세포 분화의 전자현미경적 단서다.",
      "pool": [
        "densecore",
        "lamellar",
        "mitochondria",
        "microvilli",
        "cilia"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p65.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P121",
      "wiki": {
        "lecture": 38,
        "heading": "중피종과 폐선암은 한 가지 염색이 아니라 패널로 구분한다"
      }
    },
    {
      "key": "38-c6d329326b60-thymomaA",
      "lecture": 38,
      "order": 139,
      "target": "thymomaA",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-c6d329326b60.jpg",
      "width": 859,
      "height": 668,
      "arrow": null,
      "question": "흉선종의 조직학적 유형은?",
      "note": "방추형 또는 타원형 흉선 상피세포가 비교적 균일하게 배열되고 림프구가 적다.",
      "pool": [
        "thymomaA",
        "thymomaB1",
        "thymomaB2",
        "thymomaB3",
        "thymicca"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p71.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P122",
      "wiki": {
        "lecture": 38,
        "heading": "흉선종 A·B1·B2·B3는 상피세포와 림프구의 비율로 읽는다"
      }
    },
    {
      "key": "38-afdb145bcb74-thymomaB1",
      "lecture": 38,
      "order": 140,
      "target": "thymomaB1",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-afdb145bcb74.jpg",
      "width": 754,
      "height": 636,
      "arrow": null,
      "question": "흉선종의 조직학적 유형은?",
      "note": "정상 흉선과 비슷하게 림프구가 매우 풍부하고 수질 유사 부위가 섞인다. 종양성 상피세포는 상대적으로 눈에 덜 띈다.",
      "pool": [
        "thymomaA",
        "thymomaB1",
        "thymomaB2",
        "thymomaB3",
        "thymicca"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p72.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P123",
      "wiki": {
        "lecture": 38,
        "heading": "흉선종 A·B1·B2·B3는 상피세포와 림프구의 비율로 읽는다"
      }
    },
    {
      "key": "38-1962dc4a8d76-thymomaB2",
      "lecture": 38,
      "order": 141,
      "target": "thymomaB2",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-1962dc4a8d76.jpg",
      "width": 670,
      "height": 608,
      "arrow": null,
      "question": "흉선종의 조직학적 유형은?",
      "note": "풍부한 림프구 사이로 핵소체가 보이는 다각형 상피세포가 비교적 뚜렷하게 나타난다.",
      "pool": [
        "thymomaA",
        "thymomaB1",
        "thymomaB2",
        "thymomaB3",
        "thymicca"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p73.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P124",
      "wiki": {
        "lecture": 38,
        "heading": "흉선종 A·B1·B2·B3는 상피세포와 림프구의 비율로 읽는다"
      }
    },
    {
      "key": "38-f3e0497fae5d-thymomaB3",
      "lecture": 38,
      "order": 142,
      "target": "thymomaB3",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-f3e0497fae5d.jpg",
      "width": 475,
      "height": 636,
      "arrow": null,
      "question": "흉선종의 조직학적 유형은?",
      "note": "상피세포가 판상으로 우세하고 림프구는 적다. 경도·중등도의 이형성을 보일 수 있으며 B2보다 상피 성분이 두드러진다.",
      "pool": [
        "thymomaA",
        "thymomaB1",
        "thymomaB2",
        "thymomaB3",
        "thymicca"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p74.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P125",
      "wiki": {
        "lecture": 38,
        "heading": "흉선종 A·B1·B2·B3는 상피세포와 림프구의 비율로 읽는다"
      }
    },
    {
      "key": "38-f62d10a3ed66-thymicca",
      "lecture": 38,
      "order": 143,
      "target": "thymicca",
      "kind": "disease",
      "image": "assets/pathology-drill/img-f62d10a3ed66.jpg",
      "width": 603,
      "height": 468,
      "arrow": null,
      "question": "흉선에서 발생한 종양이다. 해당 질환은?",
      "note": "뚜렷한 악성 상피세포와 침윤이 보이며 정상 흉선의 조직적 특징을 잃는다. 편평세포암 양상이 흔하다.",
      "pool": [
        "thymomaA",
        "thymomaB1",
        "thymomaB2",
        "thymomaB3",
        "thymicca"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p75.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P126",
      "wiki": {
        "lecture": 38,
        "heading": "흉선암은 정상 흉선의 구조적 특징을 잃는다"
      }
    },
    {
      "key": "38-39e6e0b62a0a-seminoma",
      "lecture": 38,
      "order": 144,
      "target": "seminoma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-39e6e0b62a0a.jpg",
      "width": 563,
      "height": 744,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "밝은 세포질과 뚜렷한 핵소체를 가진 큰 종양세포가 림프구성 격막 사이로 모인다. 앞종격동의 생식세포종양을 고려한다.",
      "pool": [
        "seminoma",
        "teratoma",
        "neuroblastoma",
        "ganglioneuro",
        "ganglioneuroma",
        "thymomaA"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p81.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P127",
      "wiki": {
        "lecture": 38,
        "heading": "림프종·생식세포종양·발육낭종도 구획에 배치한다"
      }
    },
    {
      "key": "38-9cd4fb1523aa-teratoma",
      "lecture": 38,
      "order": 144,
      "target": "teratoma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-9cd4fb1523aa.jpg",
      "width": 545,
      "height": 744,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "서로 다른 배엽에서 유래한 성숙 조직이 한 종괴 안에 섞인다. 피부·샘·연골 등 다양한 조직과 낭성 내용물을 볼 수 있다.",
      "pool": [
        "seminoma",
        "teratoma",
        "neuroblastoma",
        "ganglioneuro",
        "ganglioneuroma",
        "thymomaA"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p81.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P128",
      "wiki": {
        "lecture": 38,
        "heading": "림프종·생식세포종양·발육낭종도 구획에 배치한다"
      }
    },
    {
      "key": "38-64da243df803-neuroblastoma",
      "lecture": 38,
      "order": 145,
      "target": "neuroblastoma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-64da243df803.jpg",
      "width": 506,
      "height": 719,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "작고 미분화된 신경모세포와 neuropil을 보며 Homer Wright rosette가 나타날 수 있다. 소아의 후종격동 신경성 종양이다.",
      "pool": [
        "seminoma",
        "teratoma",
        "neuroblastoma",
        "ganglioneuro",
        "ganglioneuroma",
        "thymomaA"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p84.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P129",
      "wiki": {
        "lecture": 38,
        "heading": "후종격동 신경종양은 연령과 분화 정도를 함께 본다"
      }
    },
    {
      "key": "38-ef6c40eed412-ganglioneuro",
      "lecture": 38,
      "order": 145,
      "target": "ganglioneuro",
      "kind": "disease",
      "image": "assets/pathology-drill/img-ef6c40eed412.jpg",
      "width": 506,
      "height": 414,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "미성숙 신경모세포와 분화한 신경절세포가 함께 보인다. 미성숙·성숙 성분의 공존을 읽는다.",
      "pool": [
        "seminoma",
        "teratoma",
        "neuroblastoma",
        "ganglioneuro",
        "ganglioneuroma",
        "thymomaA"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p84.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P130",
      "wiki": {
        "lecture": 38,
        "heading": "후종격동 신경종양은 연령과 분화 정도를 함께 본다"
      }
    },
    {
      "key": "38-b857661fc42f-ganglioneuroma",
      "lecture": 38,
      "order": 145,
      "target": "ganglioneuroma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-b857661fc42f.jpg",
      "width": 535,
      "height": 414,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "성숙한 신경절세포가 Schwann 세포성 기질 속에 분포한다. 분화가 잘 된 신경성 종양이다.",
      "pool": [
        "seminoma",
        "teratoma",
        "neuroblastoma",
        "ganglioneuro",
        "ganglioneuroma",
        "thymomaA"
      ],
      "source": {
        "label": "38강 Wiki",
        "origin": "assets/lecture-38/pathology-p84.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P131",
      "wiki": {
        "lecture": 38,
        "heading": "후종격동 신경종양은 연령과 분화 정도를 함께 본다"
      }
    },
    {
      "key": "39-de5fbafdfb21-bronchocyst",
      "lecture": 39,
      "order": 147,
      "target": "bronchocyst",
      "kind": "disease",
      "image": "assets/pathology-drill/img-de5fbafdfb21.jpg",
      "width": 673,
      "height": 490,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "낭종벽의 호흡상피, 연골, 기관지샘이 기관지 기원을 알려 준다. 단순히 공간이 크다는 것보다 벽을 구성하는 조직을 확인한다.",
      "pool": [
        "hypoplasia",
        "bronchocyst",
        "sequestration",
        "bronchiectasis",
        "hamartoma",
        "emphysema"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2024/q022_02.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P132",
      "wiki": {
        "lecture": 14,
        "heading": "기관지원성 낭종은 낭종벽의 호흡상피를 확인한다"
      }
    },
    {
      "key": "39-72b25d16f9b8-crypto",
      "lecture": 39,
      "order": 150,
      "target": "crypto",
      "kind": "disease",
      "image": "assets/pathology-drill/img-72b25d16f9b8.jpg",
      "width": 556,
      "height": 577,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "크기가 다양한 둥근 효모 주위의 투명한 피막과 좁은 목의 출아가 단서다. 다핵거대세포 안팎에서 보이며 피막은 mucicarmine·Alcian blue로 확인한다.",
      "pool": [
        "aspergilloma",
        "crypto",
        "mucorDisease",
        "abpa",
        "candidiasis",
        "pjp"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2024/q024_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P133",
      "wiki": {
        "lecture": 39,
        "heading": "Cryptococcus는 맑은 피막을 가진 둥근 효모다"
      }
    },
    {
      "key": "39-c924c9e31e3f-cryptoyeast",
      "lecture": 39,
      "order": 151,
      "target": "cryptoyeast",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-c924c9e31e3f.jpg",
      "width": 560,
      "height": 582,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "둥근 효모를 넓은 투명 피막이 둘러싸고 출아의 연결부가 좁다. Cryptococcus의 특징적 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2024/q024_02.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P134",
      "wiki": {
        "lecture": 39,
        "heading": "Cryptococcus는 맑은 피막을 가진 둥근 효모다"
      }
    },
    {
      "key": "39-3e24d46c3224-scc",
      "lecture": 39,
      "order": 153,
      "target": "scc",
      "kind": "disease",
      "image": "assets/pathology-drill/img-3e24d46c3224.jpg",
      "width": 456,
      "height": 715,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "강의 실습 자료에서 편평세포암으로 제시한 사진이다. 종양세포의 각질화와 세포 사이 연결을 찾고, p40 등 편평분화 표지자와 연결한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2025/q004_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "9"
      ],
      "id": "P135",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "39-8e6bff00e422-adeno",
      "lecture": 39,
      "order": 155,
      "target": "adeno",
      "kind": "disease",
      "image": "assets/pathology-drill/img-8e6bff00e422.jpg",
      "width": 621,
      "height": 843,
      "arrow": null,
      "question": "폐종양 환자의 전이 병변이다. 종양의 조직형은?",
      "note": "종양세포가 샘 구조를 만들거나 세포질 내 점액을 가진다. Lepidic·acinar·papillary·micropapillary·solid 등 다양한 성장 양상이 있다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2022/q028_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "10"
      ],
      "id": "P136",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "39-9f1102ccf2e5-carcinoid",
      "lecture": 39,
      "order": 157,
      "target": "carcinoid",
      "kind": "disease",
      "image": "assets/pathology-drill/img-9f1102ccf2e5.jpg",
      "width": 1412,
      "height": 476,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "비교적 균일한 신경내분비 세포가 둥지·띠·rosette를 이룬다. Salt-and-pepper chromatin이 특징이며 typical/atypical 분류에는 유사분열과 괴사를 평가한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2024/q001_02.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P137",
      "wiki": {
        "lecture": 37,
        "heading": "Carcinoid는 괴사와 유사분열로 typical과 atypical을 나눈다"
      }
    },
    {
      "key": "39-be0183e9dfce-hamartoma",
      "lecture": 39,
      "order": 158,
      "target": "hamartoma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-be0183e9dfce.jpg",
      "width": 978,
      "height": 1279,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "성숙 연골 사이에 지방과 틈새 모양의 기관지 상피가 섞인 양성 병변이다. 연골 하나보다 서로 다른 성숙 조직의 조합을 읽는다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2022/q030_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P138",
      "wiki": {
        "lecture": 37,
        "heading": "연골과오종은 연골 사이에 기관지 상피와 지방이 섞인다"
      }
    },
    {
      "key": "39-40104cf2cad2-staghorn",
      "lecture": 39,
      "order": 160,
      "target": "staghorn",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-40104cf2cad2.jpg",
      "width": 1080,
      "height": 799,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "가늘고 길게 가지치는 혈관 주위에 방추세포가 배열된다. SFT의 patternless spindle-cell 배경에서 특징적으로 보인다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "label": "39강 Wiki",
        "origin": "J/2025/q008_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P139",
      "wiki": {
        "lecture": 38,
        "heading": "단발섬유종양은 CD34·STAT6와 NAB2-STAT6를 연결한다"
      }
    },
    {
      "key": "39-9a053ebdc0b1-op",
      "lecture": 39,
      "order": 163,
      "target": "op",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-9a053ebdc0b1.jpg",
      "width": 1500,
      "height": 514,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포·폐포관·세기관지 내강에 느슨한 섬유모세포성 조직이 자라 마개를 만든다. 폐포 구조는 비교적 보존된다. 원인 불명인 COP와 이차성 OP를 구분한다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "16강 Wiki · J14",
        "origin": "J/2025/q014_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P140",
      "wiki": {
        "lecture": 16,
        "heading": "Organizing pneumonia는 공기 공간 안에 수복 조직이 자란다"
      }
    },
    {
      "key": "39-724d552c46d0-cpam1",
      "lecture": 39,
      "order": 176,
      "target": "cpam1",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-724d552c46d0.jpg",
      "width": 1117,
      "height": 1500,
      "arrow": null,
      "question": "사진에 해당하는 CPAM 유형은?",
      "note": "크고 뚜렷한 낭종이 특징이다. 낭종은 섬모 원주상피로 덮이고 점액세포가 섞일 수 있다. 유형 중 가장 흔하다.",
      "pool": [
        "cpam0",
        "cpam1",
        "cpam2",
        "cpam3",
        "cpam4"
      ],
      "source": {
        "label": "14강 Wiki · J327",
        "origin": "J/2022/q036_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P141",
      "wiki": {
        "lecture": 14,
        "heading": "CPAM은 낭종의 크기와 분화 수준으로 나눈다"
      }
    },
    {
      "key": "39-4b86ba540f42-lcnec",
      "lecture": 39,
      "order": 190,
      "target": "lcnec",
      "kind": "disease",
      "image": "assets/pathology-drill/img-4b86ba540f42.jpg",
      "width": 920,
      "height": 693,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "큰 종양세포에 신경내분비성 organoid nesting·rosette·palisading이 나타난다. 높은 유사분열과 괴사, 신경내분비 표지자를 함께 평가한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki · J587",
        "origin": "J/2020/q055_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P142",
      "wiki": {
        "lecture": 37,
        "heading": "LCNEC와 combined 소세포암은 다른 성분을 함께 확인한다"
      }
    },
    {
      "key": "39-a2b21b6d21b8-densecore",
      "lecture": 39,
      "order": 191.72,
      "target": "densecore",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-a2b21b6d21b8.jpg",
      "width": 336,
      "height": 304,
      "arrow": [
        54,
        12,
        79,
        25
      ],
      "question": "폐 신경내분비세포의 전자현미경 사진이다. 화살표가 가리키는 구조는?",
      "note": "이 사진은 햄스터의 정상 폐 신경내분비세포이다. 세포질의 막으로 둘러싸인 검은 dense-core granule을 익히는 자료이며, 소세포암에서도 이러한 신경내분비 분화가 관찰될 수 있다.",
      "pool": [
        "densecore",
        "lamellar",
        "mitochondria",
        "microvilli",
        "cilia"
      ],
      "source": {
        "article": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9253501/",
        "title": "Pulmonary Neuroendocrine Cells and Small Cell Lung Carcinoma: Immunohistochemical Study Focusing on Mechanisms of Neuroendocrine Differentiation",
        "license": "This is an open access article distributed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC-BY-NC), which permits use, distribution and reproduction of the articles in any medium provided that the original work is properly cited and is not used for commercial purposes.",
        "caption": "Left: Ultrastructure of hamster PNEC showing well-developed organelles, including dense core granules, a rough ER, mitochondrion, and Golgi apparatus. Right: Ultrastructure of the brush (tuft) cell of a hamster bronchiole showing characteristic wide microvilli with filament bundles and developed organelles, as well as vesicular small granules. Bar = 1 μm.",
        "label": "외부 증례 · PMC9253501",
        "origin": "PMC9253501 F2",
        "authors": "",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "11"
      ],
      "id": "P143",
      "wiki": {
        "lecture": 37,
        "heading": "소세포암은 작은 세포와 높은 증식, TP53·RB1 소실이 만난다"
      }
    },
    {
      "key": "39-f4ff09ec52e2-sclerosing",
      "lecture": 39,
      "order": 199,
      "target": "sclerosing",
      "kind": "disease",
      "image": "assets/pathology-drill/img-f4ff09ec52e2.jpg",
      "width": 1009,
      "height": 604,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "표면 입방세포와 둥근 간질세포 두 세포군이 보이며 papillary·solid·sclerotic·hemorrhagic 양상이 섞인다. 두 세포군의 TTF-1 발현과 다른 상피표지자 차이를 확인한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "37강 Wiki · J595",
        "origin": "J/2020/q063_01.jpg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [],
      "id": "P144",
      "wiki": {
        "lecture": 37,
        "heading": "경화폐포세포종은 두 세포군의 염색 차이가 핵심이다"
      }
    },
    {
      "key": "39-1069992f8448-dad",
      "lecture": 39,
      "order": 201.24,
      "target": "dad",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-1069992f8448.jpg",
      "width": 899,
      "height": 791,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "폐포 장벽의 급성 손상으로 부종과 hyaline membrane이 생긴다. 수복기에는 type II pneumocyte 증식과 조직화가 이어진다. DAD는 조직학적 패턴이며 원인은 다양하다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 1,
        "origin": "p01-04.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "2"
      ],
      "id": "P145",
      "wiki": {
        "lecture": 14,
        "heading": "ALI·ARDS의 조직학적 손상은 DAD로 읽는다"
      }
    },
    {
      "key": "39-f8edad4942b8-hyaline",
      "lecture": 39,
      "order": 201.25,
      "target": "hyaline",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-f8edad4942b8.jpg",
      "width": 864,
      "height": 767,
      "arrow": [
        85,
        65,
        74,
        47
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "폐포 안쪽을 따라 붙은 매끈한 호산성 띠다. 누출된 단백질·fibrin과 손상된 상피 잔해로 이루어지며 DAD의 삼출기를 대표한다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 1,
        "origin": "p01-09.jpeg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "2"
      ],
      "id": "P146",
      "wiki": {
        "lecture": 14,
        "heading": "ALI·ARDS의 조직학적 손상은 DAD로 읽는다"
      }
    },
    {
      "key": "39-d7ac050ba8ac-emphysema",
      "lecture": 39,
      "order": 201.26,
      "target": "emphysema",
      "kind": "disease",
      "image": "assets/pathology-drill/img-d7ac050ba8ac.jpg",
      "width": 792,
      "height": 655,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "말단세기관지 원위부 공기 공간이 영구적으로 확장되고 폐포벽이 파괴된다. 커진 빈 공간과 끊기거나 남은 얇은 폐포중격을 함께 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 1,
        "origin": "p01-12.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "1"
      ],
      "id": "P147",
      "wiki": {
        "lecture": 15,
        "heading": "폐기종에서는 커진 공간보다 파괴된 벽이 중요하다"
      }
    },
    {
      "key": "39-7f503a8ec9e7-aspergilloma",
      "lecture": 39,
      "order": 201.27,
      "target": "aspergilloma",
      "kind": "disease",
      "image": "assets/pathology-drill/img-7f503a8ec9e7.jpg",
      "width": 1094,
      "height": 757,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "이미 존재하던 폐 공동 안에 Aspergillus 균사가 덩어리로 모여 fungal ball을 이룬다. 균사 모양과 공동 안의 위치를 함께 확인한다.",
      "pool": [
        "aspergilloma",
        "crypto",
        "mucorDisease",
        "abpa",
        "candidiasis",
        "pjp"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 1,
        "origin": "p01-21.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P148",
      "wiki": {
        "lecture": 17,
        "heading": "Aspergillus는 공생·알레르기·침습을 구분한다"
      }
    },
    {
      "key": "39-b978a74051ba-asperhypha",
      "lecture": 39,
      "order": 201.28,
      "target": "asperhypha",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-b978a74051ba.jpg",
      "width": 832,
      "height": 739,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "굵기가 비교적 균일한 가는 균사에 격벽이 있고 약 45°의 예각으로 분지한다. Aspergillus의 대표적인 조직 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 1,
        "origin": "p01-26.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P149",
      "wiki": {
        "lecture": 17,
        "heading": "진균은 균사·격벽·분지와 효모의 출아를 읽는다"
      }
    },
    {
      "key": "39-b0d56fdc6e54-asperhypha",
      "lecture": 39,
      "order": 201.29,
      "target": "asperhypha",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-b0d56fdc6e54.jpg",
      "width": 1207,
      "height": 1012,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "굵기가 비교적 균일한 가는 균사에 격벽이 있고 약 45°의 예각으로 분지한다. Aspergillus의 대표적인 조직 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-03.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P150",
      "wiki": {
        "lecture": 17,
        "heading": "진균은 균사·격벽·분지와 효모의 출아를 읽는다"
      }
    },
    {
      "key": "39-083d2c189cb9-asperhypha",
      "lecture": 39,
      "order": 201.3,
      "target": "asperhypha",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-083d2c189cb9.jpg",
      "width": 1204,
      "height": 1061,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "굵기가 비교적 균일한 가는 균사에 격벽이 있고 약 45°의 예각으로 분지한다. Aspergillus의 대표적인 조직 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-05.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "7"
      ],
      "id": "P151",
      "wiki": {
        "lecture": 17,
        "heading": "진균은 균사·격벽·분지와 효모의 출아를 읽는다"
      }
    },
    {
      "key": "39-a7071292691d-crypto",
      "lecture": 39,
      "order": 201.31,
      "target": "crypto",
      "kind": "disease",
      "image": "assets/pathology-drill/img-a7071292691d.jpg",
      "width": 1437,
      "height": 941,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "크기가 다양한 둥근 효모 주위의 투명한 피막과 좁은 목의 출아가 단서다. 다핵거대세포 안팎에서 보이며 피막은 mucicarmine·Alcian blue로 확인한다.",
      "pool": [
        "aspergilloma",
        "crypto",
        "mucorDisease",
        "abpa",
        "candidiasis",
        "pjp"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-09.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P152",
      "wiki": {
        "lecture": 39,
        "heading": "Cryptococcus는 맑은 피막을 가진 둥근 효모다"
      }
    },
    {
      "key": "39-49535c7ba00f-op",
      "lecture": 39,
      "order": 201.32,
      "target": "op",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-49535c7ba00f.jpg",
      "width": 1400,
      "height": 1075,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "이 검체는 Cryptococcus 감염 사례이지만, 이 시야에서 묻는 것은 공기 공간 안의 조직화 마개이다. 원인 질환과 동반된 OP 패턴을 구분해 읽는다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-11.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P153",
      "wiki": {
        "lecture": 16,
        "heading": "Organizing pneumonia는 공기 공간 안에 수복 조직이 자란다"
      }
    },
    {
      "key": "39-f7bc1feb9043-cryptoyeast",
      "lecture": 39,
      "order": 201.33,
      "target": "cryptoyeast",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-f7bc1feb9043.jpg",
      "width": 1166,
      "height": 1046,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "둥근 효모를 넓은 투명 피막이 둘러싸고 출아의 연결부가 좁다. Cryptococcus의 특징적 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-14.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P154",
      "wiki": {
        "lecture": 39,
        "heading": "Cryptococcus는 맑은 피막을 가진 둥근 효모다"
      }
    },
    {
      "key": "39-ec389c560f56-cryptoyeast",
      "lecture": 39,
      "order": 201.34,
      "target": "cryptoyeast",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-ec389c560f56.jpg",
      "width": 1093,
      "height": 985,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "둥근 효모를 넓은 투명 피막이 둘러싸고 출아의 연결부가 좁다. Cryptococcus의 특징적 형태다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-19.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P155",
      "wiki": {
        "lecture": 39,
        "heading": "Cryptococcus는 맑은 피막을 가진 둥근 효모다"
      }
    },
    {
      "key": "39-709bcd0d4bfa-cryptoyeast",
      "lecture": 39,
      "order": 201.35,
      "target": "cryptoyeast",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-709bcd0d4bfa.jpg",
      "width": 1441,
      "height": 1016,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "Alcian blue로 염색한 효모의 피막을 확인한다. Cryptococcus의 다당류 피막이 청색으로 보인다.",
      "pool": [
        "asperhypha",
        "mucorhypha",
        "cryptoyeast",
        "pseudohypha",
        "pjpcyst"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 2,
        "origin": "p02-21.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "8"
      ],
      "id": "P156",
      "wiki": {
        "lecture": 39,
        "heading": "Cryptococcus는 맑은 피막을 가진 둥근 효모다"
      }
    },
    {
      "key": "39-93a469b634cb-uip",
      "lecture": 39,
      "order": 201.36,
      "target": "uip",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-93a469b634cb.jpg",
      "width": 1351,
      "height": 1055,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "정상 폐, 치밀한 오래된 섬유화, 새로운 fibroblastic focus가 불균일하게 섞인다. 흉막하·격막주위 분포와 honeycomb change를 함께 본다. UIP는 패턴이며 IPF 외 질환에서도 나타난다.",
      "pool": [
        "dad",
        "uip",
        "nsip",
        "op",
        "dip",
        "rbild",
        "hp",
        "lip"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 3,
        "origin": "p03-03.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P157",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "39-5620bba2b274-ff",
      "lecture": 39,
      "order": 201.37,
      "target": "ff",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-5620bba2b274.jpg",
      "width": 1500,
      "height": 1033,
      "arrow": [
        63,
        54,
        44,
        55
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "기존 폐조직과 섬유화 경계에 볼록한 작은 섬유모세포·근섬유모세포 집합이 보인다. 점액성 바탕과 표면 상피로 덮인 새로운 섬유화 병변이다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 3,
        "origin": "p03-05.jpeg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "4"
      ],
      "id": "P158",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "39-0296b5ea9468-honeycomb",
      "lecture": 39,
      "order": 201.38,
      "target": "honeycomb",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-0296b5ea9468.jpg",
      "width": 1490,
      "height": 1023,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "섬유화로 재형성된 낭성 공간이 모여 벌집처럼 보인다. 낭성 공간은 세기관지형 상피로 덮이고 점액을 포함할 수 있다.",
      "pool": [
        "hyaline",
        "ff",
        "masson",
        "honeycomb",
        "collagen",
        "necgran"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 3,
        "origin": "p03-12.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "4"
      ],
      "id": "P159",
      "wiki": {
        "lecture": 16,
        "heading": "UIP는 정상 폐와 오래된 흉터, 새 섬유화가 섞인다"
      }
    },
    {
      "key": "39-168caa9eae2d-asbestosis",
      "lecture": 39,
      "order": 201.39,
      "target": "asbestosis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-168caa9eae2d.jpg",
      "width": 1500,
      "height": 1063,
      "arrow": null,
      "question": "석면 노출력이 있고 다른 시야에서 asbestos body가 확인된 폐조직이다. 해당 질환은?",
      "note": "하엽·흉막하 중심 섬유화와 asbestos body를 함께 읽는다. 섬유화는 UIP처럼 보일 수 있으며 노출력과 흉막판이 보조 단서다.",
      "pool": [
        "cwp",
        "silicosis",
        "asbestosis",
        "plch",
        "sarcoid",
        "hp"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 3,
        "origin": "p03-16.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "5"
      ],
      "id": "P160",
      "wiki": {
        "lecture": 16,
        "heading": "석면증은 하엽·흉막하 섬유화와 asbestos body를 찾는다"
      }
    },
    {
      "key": "39-cafae3baca04-asbestosbody",
      "lecture": 39,
      "order": 201.4,
      "target": "asbestosbody",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-cafae3baca04.jpg",
      "width": 988,
      "height": 988,
      "arrow": [
        77,
        72,
        56,
        53
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "투명한 중심 섬유를 철 함유 단백질이 감싸 황갈색 막대처럼 보인다. 구슬처럼 분절되거나 양끝이 두꺼운 모양이 특징이다.",
      "pool": [
        "asteroid",
        "schaumann",
        "asbestosbody",
        "anthracosis",
        "silicotic",
        "charcot"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 3,
        "origin": "p03-22.jpeg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "5"
      ],
      "id": "P161",
      "wiki": {
        "lecture": 16,
        "heading": "석면증은 하엽·흉막하 섬유화와 asbestos body를 찾는다"
      }
    },
    {
      "key": "39-eeb8731f1a65-scc",
      "lecture": 39,
      "order": 201.41,
      "target": "scc",
      "kind": "disease",
      "image": "assets/pathology-drill/img-eeb8731f1a65.jpg",
      "width": 1343,
      "height": 1085,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "종양세포의 keratinization과 intercellular bridge를 찾는다. Keratin pearl과 강한 호산성 세포질이 단서이며 p40 등으로 편평분화를 확인한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 4,
        "origin": "p04-03.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "9"
      ],
      "id": "P162",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "39-8454e10ae0f9-scc",
      "lecture": 39,
      "order": 201.42,
      "target": "scc",
      "kind": "disease",
      "image": "assets/pathology-drill/img-8454e10ae0f9.jpg",
      "width": 1350,
      "height": 1108,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "종양세포의 keratinization과 intercellular bridge를 찾는다. Keratin pearl과 강한 호산성 세포질이 단서이며 p40 등으로 편평분화를 확인한다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 4,
        "origin": "p04-08.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "9"
      ],
      "id": "P163",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "39-908e3af8f448-keratin",
      "lecture": 39,
      "order": 201.43,
      "target": "keratin",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-908e3af8f448.jpg",
      "width": 1500,
      "height": 991,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "종양세포 둥지 중심의 각질이 동심원으로 겹친 호산성 소용돌이 구조다. 잘 분화한 편평세포암의 대표적 소견이다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 4,
        "origin": "p04-12.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "9"
      ],
      "id": "P164",
      "wiki": {
        "lecture": 37,
        "heading": "편평세포암은 각질화와 세포사이교를 찾는다"
      }
    },
    {
      "key": "39-abb3f707e782-adeno",
      "lecture": 39,
      "order": 201.44,
      "target": "adeno",
      "kind": "disease",
      "image": "assets/pathology-drill/img-abb3f707e782.jpg",
      "width": 1385,
      "height": 1029,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "종양세포가 샘 구조를 만들거나 세포질 내 점액을 가진다. Lepidic·acinar·papillary·micropapillary·solid 등 다양한 성장 양상이 있다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 4,
        "origin": "p04-17.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "10"
      ],
      "id": "P165",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "39-169897a70312-acinar",
      "lecture": 39,
      "order": 201.45,
      "target": "acinar",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-169897a70312.jpg",
      "width": 1151,
      "height": 1024,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "종양세포가 중심 내강을 갖는 샘 구조를 만든다. 간질 안에 분리된 샘들이 침윤하는 모습을 본다.",
      "pool": [
        "lepidic",
        "acinar",
        "papillary",
        "micropapillary",
        "solid",
        "cribriform"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 4,
        "origin": "p04-21.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "10"
      ],
      "id": "P166",
      "wiki": {
        "lecture": 37,
        "heading": "샘암종은 샘 구조와 점액을 만들고 TTF-1과 Napsin A로 확인한다"
      }
    },
    {
      "key": "39-30abdf74120b-sclc",
      "lecture": 39,
      "order": 201.46,
      "target": "sclc",
      "kind": "disease",
      "image": "assets/pathology-drill/img-30abdf74120b.jpg",
      "width": 1432,
      "height": 908,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "세포질이 매우 적은 작은 종양세포가 빽빽하게 모이고 서로 핵의 모양을 누르는 nuclear molding이 나타난다. 미세한 chromatin, 많은 유사분열·괴사를 함께 본다. Chromogranin·synaptophysin·CD56 등 신경내분비 표지자가 분화를 뒷받침하며, 전자현미경에서는 dense-core neurosecretory granule을 볼 수 있다.",
      "pool": [
        "scc",
        "adeno",
        "sclc",
        "lcnec",
        "carcinoid",
        "hamartoma",
        "sclerosing"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 5,
        "origin": "p05-03.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "11"
      ],
      "id": "P167",
      "wiki": {
        "lecture": 37,
        "heading": "소세포암은 작은 세포와 높은 증식, TP53·RB1 소실이 만난다"
      }
    },
    {
      "key": "39-ecdfb5061058-molding",
      "lecture": 39,
      "order": 201.47,
      "target": "molding",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-ecdfb5061058.jpg",
      "width": 1500,
      "height": 1020,
      "arrow": [
        74,
        32,
        57,
        40
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "세포질이 적은 종양세포가 밀착해 한 핵이 이웃 핵의 윤곽을 따라 눌린다. 소세포암을 떠올리게 하는 중요한 소견이다.",
      "pool": [
        "keratin",
        "bridge",
        "molding",
        "mucin",
        "rosette",
        "staghorn"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 5,
        "origin": "p05-07.jpeg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "11"
      ],
      "id": "P168",
      "wiki": {
        "lecture": 37,
        "heading": "소세포암은 작은 세포와 높은 증식, TP53·RB1 소실이 만난다"
      }
    },
    {
      "key": "39-d87722704e62-caseation",
      "lecture": 39,
      "order": 201.48,
      "target": "caseation",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-d87722704e62.jpg",
      "width": 1327,
      "height": 973,
      "arrow": [
        85,
        72,
        62,
        45
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "정상 조직 구조가 사라진 과립성·무정형의 호산성 괴사다. 결핵성 육아종의 중심에서 대표적으로 보인다.",
      "pool": [
        "caseation",
        "coagulation",
        "liquefactive",
        "fibrinoid",
        "fatnec"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 5,
        "origin": "p05-20.jpeg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "6"
      ],
      "id": "P169",
      "wiki": {
        "lecture": 17,
        "heading": "괴사성 육아종에서는 항산균과 진균을 찾는다"
      }
    },
    {
      "key": "39-f920dc2df36c-necgran",
      "lecture": 39,
      "order": 201.49,
      "target": "necgran",
      "kind": "pattern",
      "image": "assets/pathology-drill/img-f920dc2df36c.jpg",
      "width": 1349,
      "height": 1026,
      "arrow": null,
      "question": "사진에서 보이는 병리 소견은?",
      "note": "중심의 무정형 괴사 주위를 상피양 조직구와 다핵거대세포가 둘러싼다. 결핵·진균 감염 등을 고려하고 특수염색으로 원인을 확인한다.",
      "pool": [
        "necgran",
        "nonnecgran",
        "loosegran",
        "op",
        "uip",
        "nsip"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 5,
        "origin": "p05-22.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "6"
      ],
      "id": "P170",
      "wiki": {
        "lecture": 17,
        "heading": "괴사성 육아종에서는 항산균과 진균을 찾는다"
      }
    },
    {
      "key": "39-51232dacf792-langhans",
      "lecture": 39,
      "order": 201.5,
      "target": "langhans",
      "kind": "arrow",
      "image": "assets/pathology-drill/img-51232dacf792.jpg",
      "width": 1406,
      "height": 1056,
      "arrow": [
        73,
        31,
        46,
        47
      ],
      "question": "화살표가 가리키는 병리 소견은?",
      "note": "여러 핵이 세포 가장자리를 따라 말발굽 또는 고리 모양으로 배열된다. 육아종에서 볼 수 있으나 이 세포 하나가 결핵에 특이적인 것은 아니다.",
      "pool": [
        "type2",
        "eosinophil",
        "siderophage",
        "langhans",
        "goblet",
        "neutrophil"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 5,
        "origin": "p05-24.jpeg",
        "processing": "그림 영역 자르기 · 지시 화살표는 별도 표시층"
      },
      "objectives": [
        "6"
      ],
      "id": "P171",
      "wiki": {
        "lecture": 17,
        "heading": "괴사성 육아종에서는 항산균과 진균을 찾는다"
      }
    },
    {
      "key": "39-112e4c62bbb5-bronchiectasis",
      "lecture": 39,
      "order": 201.51,
      "target": "bronchiectasis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-112e4c62bbb5.jpg",
      "width": 1466,
      "height": 1084,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "기관지벽이 파괴되어 기도가 영구적으로 확장된다. 흉막 가까이까지 이어지는 확장 기도와 고름, 조직에서는 벽의 궤양·염증·섬유화를 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 6,
        "origin": "p06-03.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "3"
      ],
      "id": "P172",
      "wiki": {
        "lecture": 15,
        "heading": "폐쇄와 감염이 반복되면 기관지는 영구적으로 늘어난다"
      }
    },
    {
      "key": "39-96f7726c1f75-bronchiectasis",
      "lecture": 39,
      "order": 201.52,
      "target": "bronchiectasis",
      "kind": "disease",
      "image": "assets/pathology-drill/img-96f7726c1f75.jpg",
      "width": 1020,
      "height": 1032,
      "arrow": null,
      "question": "사진에 해당하는 질환은?",
      "note": "기관지벽이 파괴되어 기도가 영구적으로 확장된다. 흉막 가까이까지 이어지는 확장 기도와 고름, 조직에서는 벽의 궤양·염증·섬유화를 본다.",
      "pool": [
        "emphysema",
        "bronchitis",
        "asthma",
        "bronchiectasis",
        "bronchocyst",
        "pap"
      ],
      "source": {
        "label": "폐 병리 실습 자료",
        "page": 6,
        "origin": "p06-05.jpeg",
        "processing": "그림 영역 자르기"
      },
      "objectives": [
        "3"
      ],
      "id": "P173",
      "wiki": {
        "lecture": 15,
        "heading": "폐쇄와 감염이 반복되면 기관지는 영구적으로 늘어난다"
      }
    }
  ]
};
