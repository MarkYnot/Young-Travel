const teamMembers = document.querySelector(".employee-list");

const MEMBER_INFO = [
  {
    name: "Richard Zhou",
    title: "Founder",
    avaUrl:
      "https://jamieblogbucket.s3.ap-southeast-2.amazonaws.com/images/me.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"richard@youngtravel.com.au"
  },
  {
    name: "Lucas Xie",
    title: "Manager",
    avaUrl:
      "data:image/png;base64,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",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"lucas@youngtravel.com.au"
  },
  {
    name: "Serena Zhang",
    title: "Manager",
    avaUrl:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"serena@youngtravel.com.au"
  },
  {
    name: "Phil",
    title: "Vodafone Manager",
    avaUrl:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"Phil@youngtelecom.com.au"
  },
  {
    name: "Penny Li",
    title: "Manager",
    avaUrl: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"penny@youngtravel.com.au"
  },
  {
    name: "Annie Zhang",
    title: "Senior Travel Consultant",
    avaUrl:
      "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-character-avatar-icon-design-image_2292859.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"Annie@youngtravel.com.au"
  },
  {
    name: "Max Huang",
    title: "Manager",
    avaUrl:
      "https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-male-face-avatar-man-beard-suit-shirt-necktie-portrait-businessman-icon-vector-illustration-189004563.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"max@youngtravel.com.au"
  },
  {
    name: "Monique Yip",
    title: "Manager",
    avaUrl:
      "https://images.freeimages.com/365/images/istock/previews/9730/97305669-avatar-icon-of-girl-in-a-baseball-cap.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"monique@youngtravel.com.au"
  },
  {
    name: "Eunice Zhu",
    title: "Senior Consultant",
    avaUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"eunice@youngtravel.com.au"
  },
  {
    name: "Frankie Zhong",
    title: "Senior Consultant",
    avaUrl:
      "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"frankie@youngtravel.com.au"
  },
  {
    name: "Kathy Shui",
    title: "Senior Consultant",
    avaUrl:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zihaochen-722795139/",
    githubUrl: "https://github.com/JamieChen007",
    blogUrl: "https://marklin419.com",
    email:"kathy@youngtravel.com.au"
  },
];


function render(current ,endnumber) {
(() => {
  MEMBER_INFO.slice(current,endnumber).map((member) => {
    const teamMember = document.createElement("div");
    teamMember.className = "teamMember";

    teamMember.innerHTML = `
      <img src="${member.avaUrl}" alt="${member.name}" class="avatar">
      <div class="teamMemberInfo">
        <div class="teamMemberName"><span>${member.name}</span></div>
        <div class="teamMemberTitle"><span>${member.title}</span></div>
        <div class="teamMemberEmail"><span>${member.email}</span></div>
        <div class="teamMemberLink">
          <a
            href=${member.linkedinUrl}
            class="teamMemberLinkedin"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href=${member.githubUrl}
            class="teamMemberGithub"
            target="_blank"
          >
            <i class="fa-brands fa-weixin"></i>
          </a>
          <a
            href=${member.blogUrl}
            class="teamMemberBlog"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      `;

    teamMembers.appendChild(teamMember);
  });
})();

}

let showAmount = 6;
let startFrom = 0;
render(startFrom,showAmount)


const showMoreButton = document.querySelector(".showMore");
showMoreButton.addEventListener('click', ()=>{
  startFrom = showAmount
  if(startFrom <= MEMBER_INFO.length){
    showAmount += 3;
    render(startFrom, showAmount)
    
    if(showAmount >= MEMBER_INFO.length){
      showMoreButton.style.display = "none"
    }
  }
})

