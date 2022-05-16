#!/bin/bash
## Todo: 添加log功能
sign=true
message="some changes"
for i in $*
do
  index=$[index+1]
  if [ $i = "-ns" ]
  then
    sign=false
  fi
  if [ $i = "-m" ]
  then
    _index=`expr $index + 1`
    message=$(echo $* | cut -d " " -f $_index)
  fi
done

git add .
if [ $sign = true ]
then
  git commit -s -m "$message"
else
  git commit -m "$message"
fi
git push