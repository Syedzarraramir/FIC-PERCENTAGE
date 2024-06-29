function calculation() {

var newthingss = prompt("What You Have Bought?");
var newpercent = prompt("Enter it's Price");
if (newpercent <= 100)
    {
  newpercent = (newpercent / 100) * 200;
  alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
    }
    else if(newpercent <= 1000)
        {
            newpercent = (newpercent / 1000) * 150;
            alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
        }

        else if(newpercent <= 2000 )
            {
                newpercent = (newpercent / 100) * 50;
                alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
            }
            else if(newpercent <= 4000 )
                {
                    newpercent = (newpercent / 100) * 20;
                    alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                }
                else if(newpercent <= 5000 )
                    {
                        newpercent = (newpercent / 100) * 20;
                        alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                    }

            else if(newpercent <= 10000)
                {
                    newpercent = (newpercent / 100) * 10;
                    alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                }

                else if(newpercent <= 15000)
                    {
                        newpercent = (newpercent / 100) * 7;
                        alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                    }

                    else if(newpercent <= 20000)
                        {
                            newpercent = (newpercent / 100) * 5;
                            alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                        }

                        else if(newpercent <= 30000)
                            {
                                newpercent = (newpercent / 100) * 2.5;
                                alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                            }

                            else if(newpercent <= 50000)
                                {
                                    newpercent = (newpercent / 100) * 2;
                                    alert("Congragulation a lot  you have bought a   " + newthingss + " and you will pay " + newpercent);
                                }
                                else if(newpercent <= 70000)
                                    {
                                        newpercent = (newpercent / 100) * 1.5;
                                        alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                    }
                                    else if(newpercent <= 100000)
                                        {
                                            newpercent = (newpercent / 100) * 1.1;
                                            alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                        }
                                        else if(newpercent <= 100000)
                                            {
                                                newpercent = (newpercent / 100) * 1.1;
                                                alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                            }
                                            else if(newpercent <= 100010)
                                                {
                                                    newpercent = (newpercent / 100) * 1;
                                                    alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                                }
                                                else if(newpercent <= 200000)
                                                    {
                                                        newpercent = (newpercent / 100) * 0.7;
                                                        alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                                    }
                                                    else if(newpercent <= 500000)
                                                        {
                                                            newpercent = (newpercent / 100) * 0.3;
                                                            alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                                        }
                                                        else if(newpercent > 500000)
                                                            {
                                                                newpercent = (newpercent / 100) * 0.1;
                                                                alert("Congragulation you have bought a   " + newthingss + " and you will pay " + newpercent);
                                                            }
                                                
                                            document.getElementById("buyedthing").innerHTML = "You have Bought a " +newthingss;
                                            document.getElementById("buyedthing").style.color = "purple";
                                            document.getElementById("buyedthing").style.fontSize = "50px";


                                            document.getElementById("percent").innerHTML = "Congrats you will pay only RS :" + newpercent;
                                            document.getElementById("percent").style.color = "blue";
                                            document.getElementById("percent").style.fontSize = "30px";


}