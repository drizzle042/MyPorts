import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import {useLazyQuery} from '@apollo/react-hooks';
import {PAGE} from '../../apollo/queries';

const TermsOfUseScreen = ({navigation}) => {
  const [page, setPage] = React.useState({});

  const [getPage, {data, loading, error}] = useLazyQuery(PAGE, {
    variables: {
      slug: 'terms-of-use',
    },
  });

  React.useEffect(() => {
    getPage();
  }, []);

  React.useMemo(() => {
    if (error) {
      getPage();
    }
  }, [error]);

  React.useMemo(() => {
    if (data) {
      setPage(data.page);
    }
  }, [data]);

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Terms of Use"
        headerLeft={
          <UI.Clickable activeOpacity={0.7} onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <UI.Text h2>Terms of Use</UI.Text>

          <UI.Spacer large />

          <UI.Text>{page.content}</UI.Text>
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

export default TermsOfUseScreen;
