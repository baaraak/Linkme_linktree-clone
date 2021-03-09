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
    async (newSortedLinks) => {
      updateLinks(newSortedLinks.links);
      await api.link.reOrder(newSortedLinks);
    },
    [updateLinks]
  );

  const update = useCallback(
    async (id, data) => {
      const { links } = await api.link.update(id, data);
      updateLinks(links);
    },
    [updateLinks]
  );

  const sortedLinks = useMemo(() => links.sort((a, b) => a.index - b.index), [
    links,
  ]);

  return { links, create, onDelete, reOrder, update };
}
