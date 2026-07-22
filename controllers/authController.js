const bcrypt = require("bcrypt");
const crypto = require("crypto");
const authModel = require("../models/authModel");

//auth/login>get
exports.showLogin = (req, res) => {
  res.render("auth/login",{
        pageTitle: "ลงชื่อเข้าใช้งาน หางานชลบุรี",
        metaDescription: "ลงชื่อเข้าใช้สำหรับผู้หางาน และผู้ลงประกาศรับสมัครงาน",
        meta: {

            title:
              `เข้าสู่ระบบ admin รถกระเช้าไทย`,

            description:
              `เข้าสู่ระบบ admin รถกระเช้าไทย`,

            image:
              "https://www.rodkrachaothai.com/images/default-og.png",

            url:
              `https://www.rodkrachaothai.com/auth/login`
          }
    });
};
//auth/login>post
exports.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await authModel.findByEmail(email);


    const match = await bcrypt.compare(password, user.password);

    if(!match){
        req.flash("errors", "รหัสผ่านไม่ถูกต้อง");
        return res.redirect("login");
    }

    req.session.user = {
        id: user.id,
        name:user.name,
        role: user.role
    };

    // add 23/3/69
    const redirectUrl = req.query.redirect;

    if (redirectUrl && redirectUrl.startsWith("/")) {
        return res.redirect(redirectUrl);
    };

        let maxAge;

    if(user.role === "admin"){
        maxAge = 1000 * 60 * 30; // 30 นาที
    } else if(user.role === "company"){
        maxAge = 1000 * 60 * 60 * 2; // 2 ชั่วโมง
    } else {
        maxAge = 1000 * 60 * 60 * 24 * 7; // 7 วัน
    };

    console.log("SESSION:", req.session);

    if(user.role === "user"){
        return res.redirect("/");
    }
    if(user.role === "company"){
        return res.redirect(`/company/dashboard/${user.id}`);
    }
    if(user.role === "admin"){
        return res.redirect(`/admin/dashboard/${user.id}`);
    }

    return res.send("role ไม่ถูกต้อง");

};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
            return res.send("Logout ผิดพลาด");
        }
        console.log("ออกจากระบบแล้ว");

        res.clearCookie("connect.sid");
        res.redirect("/auth/login");
    })
}

//-----------------------