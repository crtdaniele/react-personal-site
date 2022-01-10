import React from "react";
import { Absolute } from "_shared/components";
import { PageBase } from "_shared/layouts";

const Courses: React.FC = () => {
  return (
    <PageBase>
      <Absolute
        customCss={{ transform: "translateY(-50%)" }}
        top='top-1/2'
        left='left-0'
        right='right-0'
      >
        Cooming soon.
      </Absolute>
    </PageBase>
  );
};

export { Courses };
