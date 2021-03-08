import { useState, useEffect, useCallback, useMemo } from "react";
import { useSite } from "../../context/site.context";
import api from "../../services/api";

export default function useLinks() {
  const {
    data: { links },
    updateLinks,
  } = useSite();

  const create = useCallback(async () => {
    const { links } = await api.link.create();
    updateLinks(links);
  }, [updateLinks]);

  const onDelete = useCallback(
    async (id) => {
      const { links } = await api.link.delete(id);
      updateLinks(links);
    },
    [updateLinks]
  );

  const reOrder = useCallback(
    async (startIndex, endIndex) => {
      const { links } = await api.link.reOrder(startIndex, endIndex);
      // updateLinks(result);
    },
    [updateLinks]
  );

  const sortedLinks = useMemo(() => links.sort((a, b) => a.index - b.index), [
    links,
  ]);

  return { links, create, onDelete, reOrder };
}
