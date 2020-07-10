/* kaggle Automation by Mominul Islam Rasel*/

let runall,sbtn,savevr,commit=null;
runall = document.querySelector('.sc-AxjAm.ToolbarAction_Body-sc-ybo8q3.Xnsli.labeled');
sbtn = document.querySelector('.sc-AxjAm.Status_Body-sc-15eqbxr.gUIzfu');
let title = runall.title;
runall.click();
function check(){
    if(runall.title!=title){
        sbtn.click()
    }else{
        console.log(runall.title);
        clearInterval(interval);
        savevr = document.querySelector('.MuiButtonBase-root.MuiButton-root.jss65.MuiButton-contained');
        savevr.click();
    }
}
interval=window.setInterval(check,60000);

function commitsave(){
	if(commit===null){
		commit = document.querySelector('.sc-fzppip.jzSiin.SaveVersionBasicModal_StyledButton-sc-1xfkiqo.CEAco.mdc-ripple-upgraded.sc-fzppip.jzSiin.SaveVersionBasicModal_StyledButton-sc-1xfkiqo.CEAco.mdc-button.mdc-button--unelevated');
	}else{
		console.log('Commiting the kernel....\nDO NOT CANCEL OR REFREASH YOUR KERNEL....');
		commit.click();
		clearInterval(commitinterval);
	}
}

commitinterval = window.setInterval(commitsave,5000);

