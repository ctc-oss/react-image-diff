import React, { useState } from "react"

const bgImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX5+fn///8pDrwNAAAAFElEQVQI12NgsP/AQAz+f4CBGAwAJIIdTTn0+w0AAAAASUVORK5CYII="

const dimension = (x) => (isNaN(x) || !x ? null : x)

const Difference = ({ before, after, height, width, alt, handleImgLoad }) => {
  const style = {
    position: "relative",
  }
  const beforeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
  }
  const afterStyle = {
    ...beforeStyle,
  }

  return (
    <div className="ImageDiff_inner--difference" style={style}>
      <div className="ImageDiff__before" style={beforeStyle}>
        <img
          src={before}
          alt={alt}
          height={height}
          width={width}
          onLoad={handleImgLoad}
        />
      </div>
      <div className="ImageDiff__after" style={afterStyle}>
        <img
          src={after}
          alt={alt}
          height={height}
          width={width}
          style={{ mixBlendMode: "difference" }}
          onLoad={handleImgLoad}
        />
      </div>
    </div>
  )
}

const Fade = ({ before, after, height, width, alt, handleImgLoad, value }) => {
  let style = {
    backgroundImage: `url(${bgImage})`,
    height,
    width,
    margin: 0,
    position: "absolute",
  }

  let beforeStyle = {
    ...style,
  }

  let afterStyle = {
    opacity: 1 - value,
    ...style,
  }

  return (
    <div className="ImageDiff__inner--fade" style={style}>
      <div className="ImageDiff__before" style={beforeStyle}>
        <img
          src={before}
          alt=""
          height={height}
          width={width}
          onLoad={handleImgLoad}
        />
      </div>
      <div className="ImageDiff__after" style={afterStyle}>
        <img
          src={after}
          alt={alt}
          height={height}
          width={width}
          onLoad={handleImgLoad}
        />
      </div>
    </div>
  )
}

const Swipe = ({
  before,
  after,
  height = 0,
  width = 0,
  alt = "",
  handleImgLoad,
  value,
}) => {
  let style = {
    backgroundImage: `url(${bgImage})`,
    width,
    height,
    margin: 0,
    position: "absolute",
  }

  let beforeStyle = {
    ...style,
  }

  let afterStyle = {
    right: 0,
    ...style,
  }

  let swipePadding = 2
  let swiperStyle = {
    borderLeft: "1px solid #999",
    height: height + swipePadding,
    margin: 0,
    overflow: "hidden",
    position: "absolute",
    right: -swipePadding,
    width: width * (1 - value),
  }

  return (
    <div className="ImageDiff__inner--swipe" style={style}>
      <div className="ImageDiff__before" style={beforeStyle}>
        <img
          src={before}
          alt={alt}
          height={dimension(height)}
          width={dimension(width)}
          onLoad={handleImgLoad}
        />
      </div>
      <div className="ImageDiff--swiper" style={swiperStyle}>
        <div className="ImageDiff__after" style={afterStyle}>
          <img
            src={after}
            alt=""
            height={dimension(height)}
            width={dimension(width)}
            onLoad={handleImgLoad}
          />
        </div>
      </div>
    </div>
  )
}

const animationConfig = (animation) => {
  if (!animation) return null
  if (typeof animation === "boolean") {
    return {}
  } else if (typeof animation === "object") {
    return animation
  }

  throw Error(
    "[animation] prop must be boolean or an actual animation config object"
  )
}

const ImageDiff = (props) => {
  const { type, height, width, value = 0, style, slider, animation } = props
  const [imageStyle, setImageStyle] = useState({ ...style, height, width })
  const [diffValue, setDiffValue] = useState(value)

  React.useEffect(() => {
    const _animation = animationConfig(animation)
    if (_animation) {
      const { start = diffValue, end = 1, step = 0.02, delay = 50 } = _animation

      if (
        (value > end && start + step <= end) ||
        (value < end && start + step >= end)
      ) {
        setDiffValue(end)
      } else setTimeout(() => setDiffValue(start + step), delay)
    }
  }, [value, diffValue, animation])

  const handleImgLoad = (e) => {
    if (!height && !width) {
      const { height, width } = e.target
      setImageStyle({ ...style, height, width })
    }
  }

  const viewProps = {
    ...props,
    ...imageStyle,
    value: diffValue,
    handleImgLoad,
  }

  const views = {
    difference: <Difference {...viewProps} />,
    fade: <Fade {...viewProps} />,
    swipe: <Swipe {...viewProps} />,
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: imageStyle.width,
      }}
    >
      <div
        className="ImageDiff"
        style={{ display: "inline-block", ...imageStyle }}
      >
        {views[type] || views["difference"]}
      </div>
      {slider ? (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={diffValue}
          onInput={(e) => setDiffValue(e.target.value)}
        />
      ) : null}
    </div>
  )
}

export default ImageDiff
