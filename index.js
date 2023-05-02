const anchorRect = useMemo(() => {
  const selection = window.getSelection();
  const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
  if (!range) {
    return false;
  }

  if (isVisible || isActive) {
    return getRectangleFromRange(range);
  }
}, [isVisible, value.start, value.end]);
