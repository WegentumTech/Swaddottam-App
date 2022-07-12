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
      Question: 'This is the first question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the second question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the third question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the fourth question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the fifth question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the sixth question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the seven question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the eight question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
    {
      Question: 'This is the nine question',
      Answer:
        'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabonaut eum minima consequaturntempore cumque quae est etnet in consequuntur voluptatem voluptates aut',
    },
  ];

  return (
    <View style={{marginBottom: 30}}>
      {data.map(hit => {
        return (
          <View style={{marginTop: 20, marginHorizontal: 10, elevation: 10}}>
            <TouchableOpacity activeOpacity={1} onPress={handleClick}>
              <View style={{backgroundColor: '#D9D9D9', padding: 10}}>
                <Text style={{color: 'black'}}>
                  <AntDesign name={icon} size={18} color="black" /> This is the
                  header title and this will be shown here
                </Text>
              </View>
            </TouchableOpacity>

            {showIt ? (
              <View style={{backgroundColor: '#D9D9D9', padding: 10}}>
                <Text style={{color: 'black'}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
