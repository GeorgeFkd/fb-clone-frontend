FileName: "net";
Parameters: "start wampapache64";
ShowCmd: hidden;
Flags: waituntilterminated;
Action: resetservices;
Action: readconfig[upload_max_filesize16M];
Action: service;
Service: wampapache64;
ServiceAction: stop;
Flags: waituntilterminated;
Action: run;
FileName: "D:/wamp64/bin/php/php5.6.40/php-win.exe";
Parameters: "changePhpParam.php noquotes upload_max_filesize 16M";
WorkingDir: "D:/wamp64/scripts";
Flags: waituntilterminated;
Action: run;
FileName: "D:/wamp64/bin/php/php5.6.40/php-win.exe";
Parameters: "refresh.php";
WorkingDir: "D:/wamp64/scripts";
Flags: waituntilterminated;
Action: run;
FileName: "net";
Parameters: "start wampapache64";
ShowCmd: hidden;
Flags: waituntilterminated;
Action: resetservices;
Action: readconfig[upload_max_filesize32M];
Action: service;
Service: wampapache64;
ServiceAction: stop;
Flags: waituntilterminated;
Action: run;
FileName: "D:/wamp64/bin/php/php5.6.40/php-win.exe";
Parameters: "changePhpParam.php noquotes upload_max_filesize 32M";
WorkingDir: "D:/wamp64/scripts";
Flags: waituntilterminated;