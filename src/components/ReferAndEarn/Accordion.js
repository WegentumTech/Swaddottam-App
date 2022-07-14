import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Accordion = () => {
  const [showIt, setShowIt] = useState(false);
  const [icon, seticon] = useState('downcircle');

  const handleClick = () => {
    if (showIt === false) {
      setShowIt(true);
      console.log('making it true');
      seticon('upcircle');
    }
    if (showIt === true) {
      setShowIt(false);
      console.log('making it false');
      seticon('downcircle');
    }
  };

  const data = [
    {
      id: 'erge',
      Question: 'This is the first question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: '_edhfgrg',
      Question: 'This is the second question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: '_ersdgg',
      Question: 'This is the third question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: 'egsdhweeg',
      Question: 'This is the fourth question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: '_er343gerg',
      Question: 'This is the fifth question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: 'weewg',
      Question: 'This is the sixth question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: '_ergsdgerg',
      Question: 'This is the seven question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: 'affgr',
      Question: 'This is the eight question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      id: '_erafasg',
      Question: 'This is the nine question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
  ];

  return (
    <View style={{marginBottom: 30}}>
      {data.map(hit => {
        return (
          <View style={{marginTop: 20, marginHorizontal: 10, elevation: 10}} key={hit.id}>
            <TouchableOpacity activeOpacity={1} onPress={handleClick}>
              <View style={{backgroundColor: '#D9D9D9', padding: 10}}>
                <Text style={{color: 'black'}}>
                  <AntDesign name={icon} size={18} color="black" /> {hit.Question}
                </Text>
              </View>
            </TouchableOpacity>

            {showIt ? (
              <View style={{backgroundColor: '#D9D9D9', padding: 10}}>
                <Text style={{color: 'black'}}>
                 {hit.Answer}
                </Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Accordion;
