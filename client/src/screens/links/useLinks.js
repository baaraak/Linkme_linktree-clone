import { useState, useEffect, useCallback } from "react";
import { useSite } from "../../context/site.context";
import api from "../../services/api";

export default function useLinks() {
  const {
    data: { links },
    updateLinks,
  } = useSite();

  const create = useCallback(async () => {
    const results = await api.link.create();
    updateLinks(results.links);
  }, [updateLinks]);

  const onDelete = useCallback(
    async (id) => {
      const results = await api.link.delete(id);
      updateLinks(results.links);
    },
    [updateLinks]
  );

  return { links, create, onDelete };
}
