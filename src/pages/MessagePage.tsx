import { Box, Text } from 'native-base';
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Jannie, John, Putri } from '../assets';
import { MessagePreview } from '../components';
import { Theme } from '../utils';
 
const MessagePage: React.FC = () => {
  return(
    <Box style={styles.container}>
      <Text style={styles.header}>Messages</Text>

      <ScrollView style={styles.scroll}>
        <MessagePreview 
          name='Alexander Jannie'
          photo={Jannie}
          chat='Baik ibu, terima kasih banyak atas waktunya.' 
          isRead={true} 
        />
        <MessagePreview 
          name='Nairobi Putri Hayza'
          photo={Putri} 
          chat='Oh tentu saja tidak karena jeruk itu menyehatkan.' 
          isRead={false} 
        />
        <MessagePreview 
          name='John McParker Steve' 
          photo={John}
          chat='Oke menurut pak dokter bagaimana untuk menyembuhkannya?' 
          isRead={true} 
        />
      </ScrollView>
    </Box>
  );
}

const { black, white } = Theme.colors;
const { semiBold } = Theme.fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  header: {
    fontFamily: semiBold,
    fontSize: 20,
    color: black,
    marginStart: 16,
    marginTop: 30
  },
  scroll: {
    marginBottom: 60
  }
});
 
export default MessagePage;