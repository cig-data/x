import React from 'react'
import { createPortal } from 'react-dom'

import {
  Box,
  Wrap,
} from './style'

export default ({
  show,
  content,
  onChange,
}) => (
  show
    ? (
      createPortal(
        <Box>
          <Wrap>
            <h3 dangerouslySetInnerHTML={{ __html: content }} />
            <div>
              <span
                role="button"
                tabIndex={0}
                onKeyUp={() => {}}
                onClick={() => onChange(false)}
              >
                确定
              </span>
            </div>
          </Wrap>
        </Box>,
        document.body,
      )
    ) : null
)
