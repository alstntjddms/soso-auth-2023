var b = new Vue({
  el: '#app',
  data: {
    authCode: "",
    errMsg: ""
  },
  mounted : async function(){
  },
  methods:{
    // 로그인 처리
    login : async function(){
      if(this.authCode.length < 1){
        this.errMsg = "코드를 입력하세요.";
        return;
      }
      const result = await this.sendCode(this.authCode);
      if(result == true){
        console.log("로그인성공!");
        accessYn = true;
        login();
      }else{
        this.errMsg = "코드를 확인하세요.";
        accessYn = false;
      }
      // 입력값 초기화
      this.authCode = "";
    },
    // 입력한 코드 전송
    sendCode : async function(authCode){
      return await axios.post('https://plater.kr/api/auth', this.authCode, { headers: {
        'Content-Type': 'text/plain'
    }}).then(function(response){
        console.log(response.data);
        return response.data;
      }).catch(function(error) {
        console.error(error);
      });
    }
  }
});