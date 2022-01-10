import React from "react";
import DanieleCarta from "_shared/assets/img/daniele-carta.jpg";
import { Absolute } from "_shared/components";
import { About } from "homepage/components/About";
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
