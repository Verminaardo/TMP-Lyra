package com.lyra.web;

import com.lyra.bean.Entry.Entry;
import com.lyra.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/entry")
public class EntryController
{
    private final EntryService entryService;

    @Autowired
    public EntryController(EntryService entryService)
    {
        this.entryService = entryService;
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Entry> getEntryList() {
        return entryService.getAllEntry();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Entry getEntry(@PathVariable String id) {
        return entryService.getEntry(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Entry saveEntry(@RequestBody Entry entry) {
        return entryService.saveEntry(entry);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteEntry(@PathVariable String id) {
        entryService.deleteEntry(id);
    }
}