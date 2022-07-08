#!/bin/bash

if [[ $# < 1 ]]
then 
	echo "No arguments supplied"
fi

for i in $@
do 	
	mkdir ex$i
	chmod +x ex$i
done

