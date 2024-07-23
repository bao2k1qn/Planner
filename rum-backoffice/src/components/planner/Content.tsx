import React from "react";
import { cn, typedMemo } from "@/lib/utils";
import ContentItem, { RequiredFields } from "./contentItem/ContentItem";

interface ContentProps<T extends RequiredFields>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  renderContentItem: (item: T) => React.ReactNode;
}

const ContentInner = <T extends RequiredFields>(
  { data, renderContentItem, className, ...rest }: ContentProps<T>,
  _ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      ref={_ref}
      className={cn("absolute top-0 left-0 z-10", className)}
      {...rest}
    >
      <div className="relative">
        {data.map((item, idx) => (
          <ContentItem
            key={item.id || `content-item-${idx}`}
            item={item}
            renderContentItem={renderContentItem}
          />
        ))}
      </div>
    </div>
  );
};

const Content = React.forwardRef(ContentInner) as <T extends RequiredFields>(
  props: ContentProps<T> & { _ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof ContentInner>;

export default typedMemo(Content);
