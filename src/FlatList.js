/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useEffect } from 'react';
import View from './View';
import ScrollView from './ScrollView';

// todo: onEndReachedThreshold
const FlatList = ({
  data,
  renderItem,
  keyExtractor,
  ListEmptyComponent,
  ListFooterComponent,
  contentContainerStyle,
  onEndReached,
  onEndReachedThreshold,
  ...props
}) => {
  useEffect(() => {}, []);

  function handleScroll(el) {
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const { height } = el.getBoundingClientRect();

    if (height + scrollTop + 200 > scrollHeight) {
      if (onEndReached) {
        onEndReached();
      }
    }
  }

  return (
    <View
      css={css`
        flex: 1;
        overflow: hidden;
      `}
      {...props}
    >
      {data.length ? (
        <ScrollView
          onScroll={handleScroll}
          contentContainerStyle={contentContainerStyle}
          css={css`
            flex: 1;
          `}
        >
          {data.map((item, index) => (
            <Fragment key={keyExtractor(item)}>
              {renderItem({ item, index })}
            </Fragment>
          ))}

          {ListFooterComponent && ListFooterComponent()}
        </ScrollView>
      ) : (
        ListEmptyComponent && ListEmptyComponent()
      )}
    </View>
  );
};

export default FlatList;
