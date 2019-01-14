#include <sys/utsname.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>
#include <sys/utsname.h>
int main(void)
{
  int i;
  struct utsname myname;
  i = uname(&myname); /* hold the structure */

  if (i == 0)
  {
    printf("Operating system name : %s\n", myname.sysname);
    printf("Node name : %s\n", myname.nodename);
    printf("Operating system release : %s\n", myname.release);
    printf("Operating system name : %s\n", myname.version);
    printf("Hardware identifier : %s\n", myname.machine);
  }
  else
  {
    fprintf(stderr, "Oh no. uname(2) failed with %s\n", strerror(errno));
    exit(1);
  }
  return 0;
}