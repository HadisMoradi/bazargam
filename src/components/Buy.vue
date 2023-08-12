<template>
  <div id="content-wrapper" style="background:#ffffff">
			<section style="width:90%;margin:auto;background:#ffffff" id="content" class="container">

				<div id="content-body" class="row">
					<div id="content-center" class="col-lg-12">


<form action="/{City}/login?ReturnUrl=%2ftehran%2floanrequestrule%2f" method="post"><div class="page login-page">
	<div class="page-title" style="text-align:center">
		<h1>خوش آمدید، لطفا ثبت نام کنید!</h1>
	</div>

	<div class="row mt-4">
		<div class="col-12 col-md-7 col-lg-6 col-xl-5 order-md-last" style="margin:0 auto">
			<div class="card card-shadow p-5 mb-5 mb-md-0 login-box">
				<h3 class="h4 mb-0">
					اعضاء فروشگاه
				</h3>
				<hr>

				<!-- SignIn Form -->
				
						<div class="form-group">
							<div class="input-group input-group-lg has-icon">
								<input class="username form-control" id="Username" name="Username" oncopy="return false" onpaste="return false" placeholder="نام کاربری(موبایل)" type="text" value="">
								<span class="input-group-icon text-muted">
									<i class="icm icm-user"></i>
								</span>
							</div>
							<span class="field-validation-valid" data-valmsg-for="Username" data-valmsg-replace="true"></span>
						</div>

					<div class="form-group">
						<div class="input-group input-group-lg has-icon">
							<input type="password" class="password form-control" autocomplete="off" placeholder="کلمه عبور" id="Password" name="Password" maxlength="128" oncopy="return false" onpaste="return false">
							<span class="input-group-icon text-muted">
								<i class="icm icm-shield"></i>
							</span>
						</div>
						<span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
					</div>

					<div class="form-group d-flex justify-content-between">
						<label class="form-check-label">
							<input class="form-check-input" id="RememberMe" name="RememberMe" type="checkbox" value="true"><input name="RememberMe" type="hidden" value="false">
							<span>مرا به خاطر بسپار؟</span>
						</label>
						<div class="forgot-password">
							<a href="/%7bcity%7d/customer/passwordrecovery/">رمز خود را فراموش کرده اید؟</a>
						</div>
					</div>


					<div class="form-group">
						<button type="submit" class="btn btn-primary btn-lg btn-block btn-login">
							ورود به سیستم
						</button>
					</div>

					<div class="form-group">
						هنوز ثبت نام نکرده اید؟
							<div class="row">
								<div class="col-12 col-lg-auto" style="width:100%">
									<a class="btn btn-warning btn-lg btn-block register-button" href="/%7bcity%7d/registerrequest/?returnurl=%2ftehran%2floanrequestrule%2f" style="padding:5px 0">
										ثبت نام
									</a>
								</div>
							</div>
					</div>



				
			</div>
		</div>
		
	</div>
</div></form>

					</div>
					
				</div>
			</section>
		</div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    direction: rtl;
}
</style>