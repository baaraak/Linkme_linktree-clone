import { useState, useEffect, useCallback } from "react";
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

  return { links, create };
}
