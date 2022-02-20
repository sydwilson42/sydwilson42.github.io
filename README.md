<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Homework 3, CSC 235</title>
	</head>
	<body>
	<h2>GET form</h2>
        <form action="https://cs.converse.edu/CSC235/formecho.php"
                method="get" name="getform" id="getform">
            <fieldset>
                <legend>Answer me these questions three&hellip;</legend>
                <label for="getname">What is your name?</label>
                <input type="text" name="name" id="getname" /><br />
                <label for="getgradyear">What is your graduation year?</label>
                <input type="text" name="grad year" id="getgradyear" /><br />
				<label for="getmajor">What is your major?</label>
				<input type="text" name="major" id="getmajor" /><br />
                <label for="getcolor">Try to get as close to Converse purple as possible!</label>
                <input type="color" name="color" id="getcolor" /><br />
            </fieldset>
            <fieldset>
                <legend>Grouped questions</legend>
                <p>Which of the following classes have you taken? (Check all that apply.)</p>
                <div>
                    <input type="checkbox" name="biology" id="getbiology" />
                    <label for="getbiology">Biology</label><br />
                    <input type="checkbox" name="american government" id="getamericangovernment" />
                    <label for="getamericangovernment">American Government</label><br />
                    <input type="checkbox" name="visual art" id="getvisualart" />
                    <label for="getvisualart">Visual Art</label><br />
                    <input type="checkbox" name="finite math" id="getfinitemath" />
                    <label for="getfinitemath">Finite Math</label><br />
                    <input type="checkbox" name="sociology" id="getsociology" />
                    <label for="getsociology">Sociology</label><br />
                    <input type="checkbox" name="spanish 1" id="getspanish1" />
                    <label for="getspanish1">Spanish I</label><br />
                </div>
                <p>I belong to the following program:</p>
                <div>
                    <input type="radio" name="program" id="getscience" />
                    <label for="getscience">Bachelor of Science</label><br />
                    <input type="radio" name="program" id="getart" />
                    <label for="getart">Bachelor of Art</label><br />
					<input type="radio" name="program" id="getbusiness" />
                    <label for="getbusiness">Bachelor of Business</label><br />
                </div>
            </fieldset>
			<fieldset>
                <legend>More Questions</legend>
                <label for="getid">Your Converse ID is:</label>
                <input type="password" name="id" id="getid" />
                <input type="hidden" name="hidden" id="gethidden"
                    value="Secret Student ID" /><br />
                <label for="getbirthday">Birth date:</label>
                <input type="date" name="birthday" id="getbirthday" /><br />
                <label for="getscholarship">How many scholarships did you recieve:</label>
                <input type="number" name="scholarship" id="getscholarship" min="0" max="50" step="1" /><br />
				<label for="gettext">Suggest an idea for a new on-campus event!:</label>
                <textarea name="text" id="gettext" rows="5" cols="40"></textarea>
			</fieldset>
			<fieldset>
                <input type="submit" /> <input type="reset" />
            </fieldset>
		</form>
		<h2>POST form</h2>
        <form action="https://cs.converse.edu/CSC235/formecho.php"
                method="post" name="postform" id="postform">
				<fieldset>
                <legend>Answer me these questions three&hellip;</legend>
                <label for="postname">What is your name?</label>
                <input type="text" name="name" id="postname" /><br />
                <label for="postgradyear">What is your graduation year?</label>
                <input type="text" name="grad year" id="postgradyear" /><br />
				<label for="postmajor">What is your major?</label>
				<input type="text" name="major" id="postmajor" /><br />
                <label for="postcolor">Try to get as close to Converse purple as possible!</label>
                <input type="color" name="color" id="postcolor" /><br />
            </fieldset>
            <fieldset>
                <legend>Grouped questions</legend>
                <p>Which of the following classes have you taken? (Check all that apply.)</p>
                <div>
                    <input type="checkbox" name="biology" id="postbiology" />
                    <label for="postbiology">Biology</label><br />
                    <input type="checkbox" name="american government" id="postamericangovernment" />
                    <label for="postamericangovernment">American Government</label><br />
                    <input type="checkbox" name="visual art" id="postvisualart" />
                    <label for="postvisualart">Visual Art</label><br />
                    <input type="checkbox" name="finite math" id="postfinitemath" />
                    <label for="postfinitemath">Finite Math</label><br />
                    <input type="checkbox" name="sociology" id="postsociology" />
                    <label for="postsociology">Sociology</label><br />
                    <input type="checkbox" name="spanish 1" id="postspanish1" />
                    <label for="postspanish1">Spanish I</label><br />
                </div>
                <p>I belong to the following program:</p>
                <div>
                    <input type="radio" name="program" id="postscience" />
                    <label for="postscience">Bachelor of Science</label><br />
                    <input type="radio" name="program" id="postart" />
                    <label for="postart">Bachelor of Art</label><br />
					<input type="radio" name="program" id="postbusiness" />
                    <label for="postbusiness">Bachelor of Business</label><br />
                </div>
            </fieldset>
			<fieldset>
                <legend>More Questions</legend>
                <label for="postid">Your Converse ID is:</label>
                <input type="password" name="id" id="postid" />
                <input type="hidden" name="hidden" id="posthidden"
                    value="Secret Student ID" /><br />
                <label for="postbirthday">Birth date:</label>
                <input type="date" name="birthday" id="postbirthday" /><br />
                <label for="postscholarship">How many scholarships did you recieve:</label>
                <input type="number" name="scholarship" id="postscholarship" min="0" max="50" step="1" /><br />
				<label for="posttext">Suggest an idea for a new on-campus event!:</label>
                <textarea name="text" id="posttext" rows="5" cols="40"></textarea>
			</fieldset>
			<fieldset>
                <input type="submit" /> <input type="reset" />
            </fieldset>
		</form>
	</body>
</html>
